# 🧪 Blog System Test Cases

## Pre-Test Requirements

- [ ] Node dependencies installed: `npm install`
- [ ] `.env.local` configured with MONGODB_URI
- [ ] MongoDB cluster running and accessible
- [ ] Dev server running: `npm run dev`
- [ ] Admin account seeded: `POST /api/seed`

---

## Test Suite 1: Authentication

### Test 1.1: Seed Admin Account

**Steps:**

1. Open terminal
2. Run: `curl -X POST http://localhost:3001/api/seed`

**Expected:**

```json
{ "success": true, "message": "Admin seeded successfully" }
```

**Result:** ✅ / ❌

---

### Test 1.2: Admin Login - Correct Credentials

**Steps:**

1. Visit `http://localhost:3001/login`
2. Enter:
   - Email: `admin@dis.com`
   - Password: `admin123`
3. Click Login

**Expected:**

- Redirect to `/dashboard`
- Dashboard loads successfully
- Sidebar shows with links

**Result:** ✅ / ❌

---

### Test 1.3: Admin Login - Wrong Password

**Steps:**

1. Visit `/login`
2. Enter wrong password: `wrongpassword`
3. Click Login

**Expected:**

- Error message: "Invalid credentials"
- Stay on login page
- No redirect

**Result:** ✅ / ❌

---

### Test 1.4: Middleware Protection

**Steps:**

1. Log out (click Logout in sidebar)
2. Try to visit `/dashboard` directly

**Expected:**

- Redirect to `/login`
- Cannot access dashboard without login

**Result:** ✅ / ❌

---

### Test 1.5: Logout

**Steps:**

1. Log in successfully
2. Click "Logout" button in sidebar
3. Try to access `/dashboard`

**Expected:**

- Logged out
- Redirect to login page
- Cannot access dashboard

**Result:** ✅ / ❌

---

## Test Suite 2: Blog CRUD

### Test 2.1: Create Blog

**Steps:**

1. Login as admin
2. Go to `/dashboard/blogs`
3. Click "+ Create Blog"
4. Fill in:
   - Title: "Test Blog Post"
   - Description: "This is a test blog"
   - Content: "Full blog content here..."
   - Status: "Published"
5. Click "Create Blog"

**Expected:**

- Blog created successfully
- Redirect to `/dashboard/blogs`
- New blog appears in list with "published" badge

**Result:** ✅ / ❌

---

### Test 2.2: Create Duplicate Slug

**Steps:**

1. Create first blog with title "Test Blog"
2. Slug: "test-blog"
3. Try to create another blog with same title
4. Click "Create Blog"

**Expected:**

- Error message: "A blog with this title already exists"
- Blog not created
- Stay on create page

**Result:** ✅ / ❌

---

### Test 2.3: View Blog in Public

**Steps:**

1. Create blog with title "First Article" and status "Published"
2. Visit `/blogs`
3. Should see blog card with:
   - Title
   - Description
   - Image (if provided)
   - Date
4. Click on blog card

**Expected:**

- Card displays correctly
- Click opens blog detail page
- Full content visible
- SEO metadata correct

**Result:** ✅ / ❌

---

### Test 2.4: View Blog Detail

**Steps:**

1. Create blog: "My Article"
   - Auto-generates slug: "my-article"
2. Visit `/blogs/my-article`

**Expected:**

- Blog detail page loads
- Shows:
  - Title
  - Image (if provided)
  - Full description
  - Full content
  - Creation date
  - "Back to All Blogs" link

**Result:** ✅ / ❌

---

### Test 2.5: Edit Blog

**Steps:**

1. Go to `/dashboard/blogs`
2. Click "Edit" on a blog
3. Change:
   - Title: "Updated Title"
   - Description: "Updated description"
   - Status: "Draft"
4. Click "Save Changes"

**Expected:**

- Changes saved
- Redirect to `/dashboard/blogs`
- Blog list updated with new title
- Status changed to "draft" badge

**Result:** ✅ / ❌

---

### Test 2.6: Delete Blog

**Steps:**

1. Go to `/dashboard/blogs`
2. Click "Delete" on a blog
3. Confirm deletion

**Expected:**

- Blog removed from database
- No longer appears in list
- Confirmation dialog shown

**Result:** ✅ / ❌

---

### Test 2.7: Draft vs Published

**Steps:**

1. Create blog with status "Draft"
2. Create blog with status "Published"
3. Visit `/blogs` (public)

**Expected:**

- Only published blog appears
- Draft blog not visible to public
- Both visible in admin `/dashboard/blogs`

**Result:** ✅ / ❌

---

## Test Suite 3: Contact Management

### Test 3.1: Submit Contact Form

**Steps:**

1. Find any contact form on site
2. Fill in:
   - Name: "John Doe"
   - Email: "john@example.com"
   - Message: "Test message"
3. Submit form

**Expected:**

- Form submission succeeds
- Success message shown
- Contact saved to database

**Result:** ✅ / ❌

---

### Test 3.2: Contact Form Validation

**Steps:**

1. Try to submit contact form with:
   - Empty name field
   - Valid email and message
2. Submit

**Expected:**

- Form validation error
- Shows required field message
- Does not submit

**Result:** ✅ / ❌

---

### Test 3.3: View Contacts in Dashboard

**Steps:**

1. Submit 2-3 contact form messages
2. Login to admin dashboard
3. Go to `/dashboard/contacts`

**Expected:**

- All contacts listed in table
- Shows:
  - Name
  - Email
  - Message preview
  - Status (Pending/Replied)
  - Date

**Result:** ✅ / ❌

---

### Test 3.4: Mark Contact as Replied

**Steps:**

1. Go to `/dashboard/contacts`
2. Find contact with "Pending" status
3. Click "Mark Replied"

**Expected:**

- Status changes to "Replied"
- Button disappears
- Database updated

**Result:** ✅ / ❌

---

### Test 3.5: Delete Contact

**Steps:**

1. Go to `/dashboard/contacts`
2. Click "Delete" on any contact
3. Confirm

**Expected:**

- Contact removed from list
- Removed from database
- Confirmation dialog shown

**Result:** ✅ / ❌

---

## Test Suite 4: UI/UX

### Test 4.1: Responsive Design

**Steps:**

1. Open `/dashboard` on desktop
2. Open `/dashboard` on mobile (375px)
3. Open `/blogs` on tablet (768px)

**Expected:**

- Layout adapts to screen size
- Sidebar may collapse on mobile
- Tables scroll on small screens
- All buttons clickable

**Result:** ✅ / ❌

---

### Test 4.2: Navigation

**Steps:**

1. Click all sidebar links:
   - Dashboard
   - Blogs
   - Contacts
   - Logout

**Expected:**

- All links work
- Correct pages load
- Logout redirects to login

**Result:** ✅ / ❌

---

### Test 4.3: Loading States

**Steps:**

1. Create a blog
2. Observe "Creating..." state on button
3. Wait for redirect

**Expected:**

- Button shows loading state
- Cannot click again
- Disables during submission

**Result:** ✅ / ❌

---

### Test 4.4: Error Messages

**Steps:**

1. Try invalid actions:
   - Delete and confirm
   - Edit with invalid data
   - Create duplicate slug
   - Login with wrong password

**Expected:**

- Error messages displayed
- Clear, user-friendly text
- Not technical jargon

**Result:** ✅ / ❌

---

## Test Suite 5: Database

### Test 5.1: Data Persistence

**Steps:**

1. Create a blog
2. Refresh page
3. Go to `/dashboard/blogs`

**Expected:**

- Blog still exists
- Data persisted to MongoDB
- No data loss

**Result:** ✅ / ❌

---

### Test 5.2: Timestamps

**Steps:**

1. Create blog
2. Go to admin dashboard
3. Check "Created" date

**Expected:**

- Date shows correctly
- Uses today's date
- Format is readable

**Result:** ✅ / ❌

---

### Test 5.3: Slug Uniqueness

**Steps:**

1. Create blog: "First"
2. Slug generated: "first"
3. Try to create another "First"

**Expected:**

- Second creation fails
- Error about duplicate
- Slug uniqueness enforced

**Result:** ✅ / ❌

---

## Test Suite 6: SEO

### Test 6.1: Blog Meta Tags

**Steps:**

1. Create blog: "SEO Test Blog"
   - Description: "This is SEO description"
2. Visit `/blogs/seo-test-blog`
3. Inspect page source for meta tags

**Expected:**

- Title tag: "SEO Test Blog"
- Meta description present
- Open Graph tags present
- Image in meta tags (if provided)

**Result:** ✅ / ❌

---

### Test 6.2: Blog List Meta Tags

**Steps:**

1. Visit `/blogs`
2. Inspect page source

**Expected:**

- Page title: "Blog | Digital IT Solutions"
- Meta description present

**Result:** ✅ / ❌

---

## Summary

**Total Tests:** 25+
**Passed:** **_
**Failed:** _**

### Critical Path Tests (Must Pass)

- [ ] Test 1.1: Seed Admin
- [ ] Test 1.2: Login Works
- [ ] Test 2.1: Create Blog
- [ ] Test 2.4: View Blog Detail
- [ ] Test 3.1: Submit Contact
- [ ] Test 3.3: View Contacts

### Notes

```
[Add any failures or observations here]
```

---

## Sign-Off

**Tester Name:** ******\_\_\_******
**Date:** ******\_\_\_******
**Status:** ✅ PASS / ❌ FAIL
