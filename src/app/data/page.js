import React from "react";
import QRCode from "react-qr-code";

const Data = () => {
  return (
    <div className="my-52 w-[900px] m-auto">
      <img
        className="m-auto"
        src="https://cims.cidb.gov.my/pbsearch/cidbtheme/images/cims-landing/footer-cidb-logo-2.png"
      />
      <h1 className="text-center font-bold text-lg">
        LEMBAGA PEMBANGUNAN INDUSTRI PEMBINAAN MALAYSIA
      </h1>
      <h1 className="text-center mt-5 font-bold text-lg">
        PERAKUAN PENDAFTARAN PERSONEL BINAAN
      </h1>
      <p className="text-center">
        AKTA LEMBAGA PEMBANGUNAN INDUSTRI PEMBINAAN MALAYSIA 1994 (AKTA 520){" "}
        <br />
        [Seksyen 33(1) dan 33A(1)]
      </p>
      <img className="w-[190px] m-auto my-10" src="/ss.jpeg" />
      <div className="flex justify-between font-semibold w-[600px] m-auto">
        <div>
          <p>No. K.P./ No. Pasport/ No. Dokumen</p>
          <p className="mt-2">Nama Personel</p>
          <p className="mt-2">Warganegara</p>
          <p className="mt-2">Tarikh Tamat Pendaftaran Personel Binaan</p>
          <p className="mt-2">Majikan</p>
        </div>
        <div className="w-6/12">
          <p>A11153650</p>

          <p className="mt-2">SHOBUR MD ABDUS</p>
          <p className="mt-2">BANGLADESH</p>
          <p className="mt-2">19/03/2025</p>
          <p className="mt-8">GENERAL CONSTRUCTION WORKER</p>
        </div>
      </div>
      <div className="w-[150px] ml-auto mt-[400px]">
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={
            "https://cims.cidb.gov.my/cpbv2/Forms/Transactions/searchnavigation.aspx?search=A11153650"
          }
          viewBox={`0 0 256 256`}
        />
      </div>
      <h3 className="text-center font-bold text-lg">
        DOKUMEN INI ADALAH CETAKAN KOMPUTER, TIADA TANDATANGAN DIPERLUKAN
      </h3>
    </div>
  );
};

export default Data;
