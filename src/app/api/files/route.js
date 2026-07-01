import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import path from "path";

const bucket_Name = process.env.BUCKET_NAME;
const bucket_Region = process.env.BUCKET_REGION;
const access_Key = process.env.ACCESS_KEY;
const secret_Access = process.env.SECRET_ACCESS;
const cloudfront_Domain = process.env.CLOUDFRONT_DOMAIN;

const s3 = new S3Client({
  credentials: {
    accessKeyId: access_Key,
    secretAccessKey: secret_Access,
  },
  region: bucket_Region,
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("images");

    if (!files || files.length === 0) {
      return Response.json({ error: "No files provided" }, { status: 400 });
    }

    const uploadedFiles = [];

    for (const file of files) {
      const fileExtension = path.extname(file.name);
      const fileName =
        file.name
          .replace(fileExtension, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();

      const buffer = await file.arrayBuffer();

      const params = {
        Bucket: bucket_Name,
        Key: fileName,
        Body: buffer,
        ContentType: file.type,
      };

      const command = new PutObjectCommand(params);
      await s3.send(command);

      const fileUrl = `${cloudfront_Domain}/${fileName}`;
      uploadedFiles.push(fileUrl);
    }

    return Response.json(uploadedFiles);
  } catch (error) {
    console.error("Error uploading files to S3:", error);
    return Response.json(
      { error: "An error occurred while uploading files." },
      { status: 500 },
    );
  }
}

export async function DELETE(request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return Response.json({ error: "No URL provided" }, { status: 400 });
    }

    // Extract filename from CloudFront URL
    const fileName = url.split("/").pop();

    if (!fileName) {
      return Response.json({ error: "Invalid URL format" }, { status: 400 });
    }

    const params = {
      Bucket: bucket_Name,
      Key: fileName,
    };

    const command = new DeleteObjectCommand(params);
    await s3.send(command);

    return Response.json({
      success: true,
      message: "File deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting file from S3:", error);
    return Response.json(
      { error: "An error occurred while deleting the file." },
      { status: 500 },
    );
  }
}
