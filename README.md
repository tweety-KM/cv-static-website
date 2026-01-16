# cv-static-website
# Personal CV Static Website on AWS

This project demonstrates how I designed, deployed and iteratively improved a one-page personal CV website using core AWS services. The site evolved from a basic unstyled HTML page into a refined, editorial-style static website with custom typography, colour, and layout.

The focus of this project was not only visual presentation, but also understanding cloud fundamentals, deployment workflows and troubleshooting in AWS.

---

## Project Overview

- **Type:** Static website (one-page CV)
- **Purpose:** Portfolio and learning project
- **Hosting:** Amazon S3
- **Content Delivery:** Amazon CloudFront
- **Version Control:** Git & GitHub
- **Design Approach:** Luxury / editorial CV layout

---

## AWS Services Used

### Amazon S3
- Created an S3 bucket configured for **static website hosting**
- Uploaded and managed website assets (`index.html`, `style.css`)
- Configured **public read access** using a bucket policy
- Learned how S3 object keys, file paths, and case sensitivity affect website rendering

### Amazon CloudFront
- Set up a CloudFront distribution in front of the S3 static website
- Configured the **default root object** (`index.html`)
- Learned how CDN caching affects updates and how to resolve issues using **cache invalidation**
- Improved website performance and HTTPS delivery

### AWS IAM (implicit usage)
- Understood the role of IAM permissions in controlling access to AWS resources
- Applied the principle of least privilege when configuring public access

---

## Development & Deployment Workflow

1. Started with a blank HTML page hosted on S3
2. Verified static website hosting and permissions
3. Incrementally added:
   - Structured HTML sections
   - Custom CSS styling
   - Typography using Google Fonts
   - Colour palette and layout hierarchy
4. Used VS Code Live Server for local development
5. Uploaded updated files to S3 and validated changes
6. Troubleshot common issues such as:
   - Incorrect file paths
   - Missing CSS links
   - Browser and CDN caching
7. Version-controlled all changes using **Git**
8. Pushed updates to **GitHub** with clear commit messages

---

## Skills Demonstrated

### Cloud & Infrastructure Skills
- Static website hosting on AWS
- CDN configuration and troubleshooting
- Understanding of DNS, caching, and content delivery
- Reading and interpreting

 ### Visual Studio Code
- Developed and edited HTML and CSS using Visual Studio Code
- Used Live Server to preview changes locally before deploying to AWS
- Managed folder structure to ensure compatibility between local development and S3 static hosting
- Identified and resolved issues related to file paths, caching, and asset loading
-Integrated VS Code workflow with Git and GitHub for version control
