# 🚨 SafeReport – Anonymous Crime & Incident Reporting Platform  

## 📌 Project Description  

SafeReport is a **secure web application** that allows users to **anonymously report crimes and incidents** while ensuring privacy and security. The platform includes an **AI-powered reporting system**, **location tracking**, and an **admin dashboard** for emergency authorities to manage reports efficiently.  

## ✨ Features  

- **🔍 AI-Powered Incident Detection:** Integrated **Gemini AI** to analyze uploaded images, generate report titles, and provide detailed descriptions automatically.  
- **🌍 Location Tracking & Map Integration:** Users can manually enter their location or use **automated detection**, with **Mapbox** displaying the incident location on a map.  
- **🛡️ Secure Admin Dashboard:** Restricted to authorized emergency personnel for managing reported incidents.  
- **🔐 Authentication & RBAC:** Role-based access control ensures only **admins** can review and manage sensitive reports.  
- **📌 Report Tracking System:** Each submitted report generates a **unique report ID**, allowing users to track their report's status (**Pending, Resolved, or Rejected**).  
- **📞 Direct Emergency Contact:** Users can contact emergency services directly from the application.  
- **🖥️ Modern & Responsive UI:** Designed with **Shard CN and Tailwind CSS** for a seamless and accessible user experience.  

## 📌 Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/sumamakhan761/crime-report.git
   cd crime-report
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the required environment variables:
   ```env
      NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=
      DATABASE_URL=
      GEMINI_API_KEY=
      NEXTAUTH_SECRET="your-seceret-key"
      NEXTAUTH_URL="http://localhost:3000/api/auth"
   
   ```
   
   ## 🔗 Environment Variable References
    
      | Variable | Description | Official Link |
      |----------|-------------|--------------|
      | **POSTGRES_URL** | PostgreSQL Database URL | 🔗[PostgreSQL](https://www.postgresql.org/) |
      | **POSTGRES_DATABASE** | PostgreSQL Database Name (neondb) | 🔗[NeonDB](https://neon.tech/) |
      | **PRISMA** | PostgreSQL URL for Prisma ORM | 🔗[Prisma](https://www.prisma.io/) |
      | **Gemini** | Gemini-api-key | 🔗[Gemini](https://aistudio.google.com/apikey) |

4. **Run the development server:**
   ```sh
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack  

| Technology    | Logo |
|--------------|------|
| **Next.js**  | <img src="https://img.icons8.com/?size=100&id=r2OarXWQc7B6&format=png&color=FFFFFF" width="50" height="50"> |
| **TypeScript** | <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="50" height="50"> |
| **JavaScript** | <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="50" height="50"> |
| **Tailwind CSS** | <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" width="50" height="50"> |
| **PostgreSQL** | <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" width="50" height="50"> |
| **Prisma ORM** | <img src="https://cdn.worldvectorlogo.com/logos/prisma-3.svg" width="50" height="50"> |
| **Clerk** | <img src="https://clerk.com/_next/image?url=%2Fv2%2Fdownloads%2Fclerk-logo-white.svg&w=2048&q=75" width="75" height="75"> |
| **Gemini** | <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_advanced_1743d7b7a7bc01f38e6f4.svg" width="75" height="75"> |
| **Mapbox** | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mapbox_logo_2019.svg/640px-Mapbox_logo_2019.svg.png" width="160" height="40"> |

---
## 🔗 Connect with Me
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfoliosumama.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sumama-khan)
[![Leetcode](https://img.shields.io/badge/Leetocode-1DA1F2?style=for-the-badge&logo=Leetcode&logoColor=yellow)](https://leetcode.com/u/sumamakhan))
---
## ⭐️ Show Your Support
Give a ⭐️ if you like this project!
