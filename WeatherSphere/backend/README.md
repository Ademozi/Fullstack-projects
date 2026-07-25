# Why adding config and utils?

Compared to the internship projects, we're organizing the code more like a real application:

* config/ → configuration code (for example, connecting to MongoDB).
* utils/ → helper functions that can be reused across the project.

This keeps server.js clean and makes the project easier to maintain as it grows.

# CORS
## React frontend
http://localhost:5173

## Express backend
http://localhost:5000

The browser says:
```
❌ Blocked by CORS Policy
```

# So what is CORS?

CORS stands for
Cross-Origin Resource Sharing
It is simply a way for your backend to tell the browser:
```
"I know this request comes from another origin, and I allow it."
```

---

# API Endpoints

Before writing code, let's define the API.

### Authentication
```
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile
```
### Weather
```
GET /api/weather/:city
```
### Favorites
```
POST   /api/favorites
GET    /api/favorites
DELETE /api/favorites/:id
```

Notice the /api prefix. It's a common convention that makes it clear these are API routes and leaves room to serve a frontend or other resources later.

---

# Relationships using ref
In SQL, you'd use a foreign key.
In MongoDB, we use an ObjectId reference.