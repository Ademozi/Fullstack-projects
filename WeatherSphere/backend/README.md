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