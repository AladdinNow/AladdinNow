# AladdinNow Development Prompt

## 🎯 Project Context
You are helping to build **AladdinNow**, a B2B marketplace platform similar to Alibaba, designed for the Indian market. This is a startup project that needs to be built quickly and efficiently.

## 🏗️ Technical Architecture
- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS, Shadcn/ui
- **Backend**: Next.js API Routes, Prisma ORM, PostgreSQL (Supabase)
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS with custom components
- **Database**: PostgreSQL with Prisma schema
- **Deployment**: Vercel (free tier)

## 📋 Core Requirements

### 1. Component-Based Architecture
- Break down every UI into reusable, well-commented components
- Use TypeScript interfaces for all props
- Implement proper error boundaries and loading states
- Follow mobile-first responsive design

### 2. Database Design
- Design normalized database schemas
- Use Prisma for type-safe database operations
- Implement proper relationships between entities
- Add indexes for performance optimization

### 3. Authentication & Security
- Implement secure business registration and login
- Add email verification system
- Create protected routes and middleware
- Implement proper session management

### 4. Business Features
- Business profile management
- Product catalog with categories
- Advanced search and filtering
- Supplier verification system
- RFQ (Request for Quote) system
- Messaging and communication
- Payment integration
- Order management

## 🎨 UI/UX Guidelines

### Design Principles
- **Modern & Professional**: Clean, business-focused design
- **Mobile-First**: Responsive design that works on all devices
- **Accessibility**: WCAG compliance and keyboard navigation
- **Performance**: Fast loading times and smooth interactions

### Color Scheme
- Primary: Professional blue (#2563eb)
- Secondary: Business gray (#6b7280)
- Success: Green (#10b981)
- Warning: Orange (#f59e0b)
- Error: Red (#ef4444)
- Background: Light gray (#f9fafb)

### Typography
- Headings: Inter font family
- Body: Inter font family
- Sizes: Follow Tailwind's scale (text-sm, text-base, text-lg, etc.)

## 📝 Coding Standards

### TypeScript
```typescript
// Always use interfaces for props
interface ComponentProps {
  title: string;
  description?: string;
  onAction: () => void;
}

// Use proper typing for all functions
const handleSubmit = async (data: FormData): Promise<void> => {
  // Implementation
};
```

### Component Structure
```typescript
// components/ui/ComponentName.tsx
import { ComponentProps } from 'react';

interface ComponentNameProps extends ComponentProps<'div'> {
  // Custom props
}

export const ComponentName = ({ 
  children, 
  className, 
  ...props 
}: ComponentNameProps) => {
  return (
    <div className={cn("base-styles", className)} {...props}>
      {children}
    </div>
  );
};
```

### File Naming
- Components: PascalCase (e.g., `ProductCard.tsx`)
- Pages: kebab-case (e.g., `product-details.tsx`)
- Utilities: camelCase (e.g., `formatPrice.ts`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)

## 🔧 Development Workflow

### 1. Component Creation
- Create component file with proper TypeScript interfaces
- Add comprehensive JSDoc comments
- Implement responsive design
- Add loading and error states
- Test on different screen sizes

### 2. Database Operations
- Design Prisma schema first
- Create migration files
- Implement proper error handling
- Add input validation with Zod
- Use transactions for complex operations

### 3. API Development
- Create RESTful API endpoints
- Implement proper HTTP status codes
- Add request/response validation
- Handle errors gracefully
- Add rate limiting where necessary

## 📱 Responsive Design Requirements

### Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

### Mobile-First Approach
```typescript
// Start with mobile styles, then add larger breakpoints
<div className="
  p-4                    // Mobile padding
  md:p-6                 // Tablet padding
  lg:p-8                 // Desktop padding
">
```

## 🚀 Performance Optimization

### Image Optimization
- Use Next.js Image component
- Implement lazy loading
- Optimize image formats (WebP, AVIF)
- Add proper alt tags

### Code Splitting
- Use dynamic imports for heavy components
- Implement route-based code splitting
- Lazy load non-critical components

### Database Optimization
- Use proper indexes
- Implement pagination
- Cache frequently accessed data
- Optimize queries

## 🔒 Security Considerations

### Input Validation
- Validate all user inputs with Zod
- Sanitize data before database operations
- Implement CSRF protection
- Use prepared statements (Prisma handles this)

### Authentication
- Secure session management
- Implement proper logout
- Add rate limiting for login attempts
- Use HTTPS in production

## 📊 Testing Strategy

### Component Testing
- Test component rendering
- Test user interactions
- Test responsive behavior
- Test accessibility

### API Testing
- Test all endpoints
- Test error scenarios
- Test authentication
- Test rate limiting

## 🎯 Current Development Phase
**Phase 1: Foundation (Weeks 1-4)**
- Focus on basic platform structure
- Implement user authentication
- Create business profile management
- Build basic UI components

## 💡 Development Tips

1. **Start Small**: Build MVP features first, enhance later
2. **Reuse Components**: Create a component library early
3. **Mobile First**: Always test on mobile devices
4. **Performance**: Optimize as you build, don't leave it for later
5. **Documentation**: Comment your code thoroughly
6. **Testing**: Test features as you build them

## 🚨 Common Pitfalls to Avoid

- Don't over-engineer early features
- Don't skip mobile responsiveness
- Don't ignore error handling
- Don't forget about loading states
- Don't skip input validation
- Don't ignore accessibility

## 📞 When You Need Help

If you encounter issues:
1. Check the component structure
2. Verify TypeScript types
3. Check database schema
4. Test responsive design
5. Verify error handling
6. Check authentication flow

---

**Remember**: This is a startup project - focus on getting core features working quickly while maintaining code quality. Perfect is the enemy of done!
