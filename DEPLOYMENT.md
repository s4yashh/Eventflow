# EventFlow Deployment Guide

This guide provides comprehensive instructions for deploying EventFlow in various environments.

## 📋 Prerequisites

Before deploying, ensure you have:
- Node.js 16.x or higher
- npm or yarn package manager
- Git for version control
- Terminal/Command line access

## 🚀 Deployment Environments

### Local Development

#### Setup
```bash
# Clone the repository
git clone https://github.com/s4yashh/Eventflow.git
cd EventFlow

# Install dependencies
npm install

# Start development server
npm run dev
```

**Access:** http://localhost:3000

#### Development Features
- Hot module reloading (auto-refresh)
- Source maps for debugging
- Full error reporting
- Development tools enabled

### Production Build

#### Build Process
```bash
# Install dependencies (if not already done)
npm install

# Build for production
npm run build

# Preview production build locally
npm run preview
```

#### Build Output
- Output directory: `.output/`
- Optimized and minified code
- Precompiled assets
- Ready for deployment

#### Start Production Server
```bash
# Start production server
npm run start
```

### Static Site Generation

#### Generate Static Files
```bash
# Generate static HTML files
npm run generate
```

#### Output
- Directory: `dist/`
- Static HTML for all routes
- Pre-rendered for maximum performance
- Can be hosted on any static hosting

## ☁️ Cloud Platform Deployment

### Vercel (Recommended for Nuxt)

**Vercel is the official hosting platform for Nuxt**

#### Steps:
1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Configuration** (optional .vercelrc or vercel.json)
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": ".output/public"
   }
   ```

#### Benefits
- Automatic deployments on git push
- Zero-config setup
- Free tier available
- CDN included
- Analytics and monitoring

**URL:** https://eventflow.vercel.app (example)

### Netlify

#### Steps:
1. **Connect GitHub Repository**
   - Go to netlify.com
   - Click "New site from Git"
   - Select your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.output/public`

3. **Deploy**
   - Netlify automatically builds on git push

#### Configuration (netlify.toml)
```toml
[build]
command = "npm run build"
functions = "netlify/functions"
publish = ".output/public"

[dev]
command = "npm run dev"
port = 3000
```

#### Benefits
- Free tier included
- Automatic deployments
- Form handling
- Serverless functions support

**URL:** https://eventflow-demo.netlify.app (example)

### Railway

#### Steps:
1. **Create Account** at railway.app
2. **Connect Repository**
3. **Set Environment**
   - Node version: 18 (or later)
4. **Deploy**
   ```
   railway up
   ```

#### Configuration (railway.json)
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "nixpacks"
  }
}
```

### Heroku (Legacy Option)

#### Steps:
1. **Create Procfile**
   ```
   web: npm run start
   ```

2. **Deploy**
   ```bash
   heroku create eventflow-app
   git push heroku main
   ```

### Docker Deployment

#### Create Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Runtime stage
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
```

#### Build and Run
```bash
# Build image
docker build -t eventflow .

# Run container
docker run -p 3000:3000 eventflow
```

#### Docker Compose
```yaml
version: '3.8'
services:
  eventflow:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

### AWS EC2

#### Steps:
1. **Launch EC2 Instance**
   - AMI: Ubuntu 20.04 LTS
   - Instance type: t2.micro (free tier)

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone and Deploy**
   ```bash
   git clone https://github.com/s4yashh/Eventflow.git
   cd EventFlow
   npm install
   npm run build
   npm run start
   ```

4. **Setup Reverse Proxy (Nginx)**
   ```bash
   sudo apt install nginx
   ```

   **Configure /etc/nginx/sites-available/default**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
       }
   }
   ```

5. **Setup PM2 for Process Management**
   ```bash
   npm install -g pm2
   pm2 start ".output/server/index.mjs" --name "eventflow"
   pm2 startup
   pm2 save
   ```

## 📦 Environment Variables

### Development (.env.local)
```env
NODE_ENV=development
HOST=localhost
PORT=3000
```

### Production (.env.production)
```env
NODE_ENV=production
HOST=0.0.0.0
PORT=3000
API_BASE_URL=https://api.eventflow.com
```

## 🔐 Security Checklist

Before production deployment:

- [ ] Update package dependencies: `npm update`
- [ ] Audit for vulnerabilities: `npm audit`
- [ ] Review environment variables
- [ ] Enable HTTPS/SSL
- [ ] Setup CORS properly
- [ ] Configure CSP headers
- [ ] Enable gzip compression
- [ ] Setup error logging
- [ ] Configure monitoring
- [ ] Backup strategy in place

## 📊 Performance Optimization

### Pre-deployment Checklist

1. **Build Optimization**
   ```bash
   # Analyze build size
   npm run build
   du -sh .output
   ```

2. **Asset Optimization**
   - Compress images
   - Minimize CSS/JS
   - Enable gzip compression

3. **Caching Strategy**
   - Configure HTTP caching headers
   - Setup CDN for static assets
   - Cache dynamic pages appropriately

### Monitoring & Analytics

Setup monitoring for:
- Application uptime
- Response times
- Error rates
- User analytics
- Performance metrics

### Popular Monitoring Tools
- **Sentry** - Error tracking
- **LogRocket** - Session replay
- **DataDog** - Infrastructure monitoring
- **New Relic** - Application performance
- **Google Analytics** - User analytics

## 🚨 Troubleshooting Deployment

### Common Issues

#### 1. Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### 2. Port Already in Use
```bash
# Find process on port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

#### 3. Memory Issues
```bash
# Increase Node memory
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

#### 4. Database Connection Fails
- Check connection string
- Verify firewall rules
- Test connection separately
- Review error logs

## 📝 Deployment Checklist

- [ ] Code is committed and pushed
- [ ] All tests passing
- [ ] Dependencies updated
- [ ] Build successfully completes
- [ ] Environment variables configured
- [ ] Database migrations run (if applicable)
- [ ] SSL certificate configured
- [ ] DNS records updated
- [ ] Backup created
- [ ] Monitoring enabled
- [ ] Team notified of deployment

## 🔄 Continuous Deployment (CI/CD)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        run: vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

## 📞 Support & Resources

- **Nuxt Deployment**: https://nuxt.com/docs/getting-started/deployment
- **Node.js Documentation**: https://nodejs.org/docs/
- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com/

---

**Happy deploying! 🚀**
