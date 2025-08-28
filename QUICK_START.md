# 🚀 AladdinNow Quick Start Guide

## ⚡ Get Started in 10 Minutes

### 1. Prerequisites
- Node.js 18+ installed
- Git installed
- Cursor IDE (you're already using this!)
- Supabase account (free)

### 2. Project Setup

```bash
# Create Next.js project with TypeScript
npx create-next-app@latest aladin-now --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Navigate to project
cd aladin-now

# Install additional dependencies
npm install @prisma/client @next-auth/prisma-adapter next-auth
npm install @hookform/resolvers react-hook-form zod
npm install @radix-ui/react-icons
npm install class-variance-authority clsx tailwind-merge
npm install lucide-react

# Install dev dependencies
npm install -D prisma @types/node
```

### 3. Initialize Prisma

```bash
# Initialize Prisma
npx prisma init

# Set up your database URL in .env
# DATABASE_URL="postgresql://username:password@localhost:5432/aladinnow"
```

### 4. Basic Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/
│   ├── products/
│   ├── suppliers/
│   ├── api/
│   │   ├── auth/
│   │   ├── products/
│   │   └── suppliers/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── forms/
│   ├── layout/
│   └── business/
├── lib/
│   ├── auth.ts
│   ├── db.ts
│   └── utils.ts
└── types/
    └── index.ts
```

### 5. Environment Variables (.env.local)

```env
# Database
DATABASE_URL="your_supabase_database_url"

# NextAuth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Supabase
NEXT_PUBLIC_SUPABASE_URL="your_supabase_url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your_supabase_anon_key"

# Email (SendGrid)
SENDGRID_API_KEY="your_sendgrid_key"
```

### 6. Start Development

```bash
# Run development server
npm run dev

# Open http://localhost:3000
```

## 🎯 First Tasks to Complete

### Day 1: Basic Setup
- [ ] Project structure created
- [ ] Database connected
- [ ] Basic layout component
- [ ] Homepage with hero section

### Day 2: Authentication
- [ ] NextAuth.js configured
- [ ] Login/Register forms
- [ ] Protected routes
- [ ] User session management

### Day 3: Business Profiles
- [ ] Business registration form
- [ ] Profile creation
- [ ] Dashboard layout
- [ ] Basic navigation

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Database
npx prisma studio    # Open database GUI
npx prisma migrate dev # Run migrations
npx prisma generate  # Generate Prisma client

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format with Prettier
```

## 📱 Test Your Setup

1. **Visit homepage** - Should see AladdinNow branding
2. **Check responsive design** - Resize browser window
3. **Verify TypeScript** - Check for type errors in Cursor
4. **Test database connection** - Run Prisma commands

## 🚨 Common Issues & Solutions

### Issue: "Module not found" errors
**Solution**: Restart your dev server after installing new packages

### Issue: Database connection failed
**Solution**: Check your DATABASE_URL in .env file

### Issue: Tailwind CSS not working
**Solution**: Make sure globals.css imports Tailwind directives

### Issue: TypeScript errors
**Solution**: Run `npm run build` to see all type errors

## 📞 Next Steps

1. **Set up Supabase database** - Create tables for users, businesses, products
2. **Design database schema** - Use the Prisma schema file
3. **Create authentication flow** - Implement NextAuth.js
4. **Build basic components** - Start with header, footer, forms

## 🎉 You're Ready!

Your AladdinNow development environment is now set up! You can start building features immediately. Remember to:

- Follow the component-based architecture
- Use TypeScript everywhere
- Test on mobile devices
- Commit your code regularly
- Update the progress.md file as you complete tasks

**Happy coding! 🚀**
