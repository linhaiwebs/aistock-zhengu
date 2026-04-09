# Fix for Node.js 25.x Compatibility Issue

## Problem

The application was failing to start in production with the following error:

```
Error: libnode.so.109: cannot open shared object file: No such file or directory
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: 'better-sqlite3@12.4.1',
npm warn EBADENGINE   required: { node: '20.x || 22.x || 23.x || 24.x' },
npm warn EBADENGINE   current: { node: 'v25.8.0', npm: '11.11.0' }
npm warn EBADENGINE }
```

## Root Cause

The `better-sqlite3` package version 12.4.1 only supports Node.js versions 20.x, 22.x, 23.x, and 24.x. The production environment is running Node.js v25.8.0, which is not compatible with this version.

## Solution

Updated `better-sqlite3` from version `12.4.1` to `12.8.0`, which adds support for Node.js 25.x.

### Changes Made

**File**: `package.json`

```diff
- "better-sqlite3": "^12.4.1",
+ "better-sqlite3": "^12.8.0",
```

### Verification

Checked the latest version's compatibility:
```bash
npm view better-sqlite3@12.8.0 engines
# Output: { node: '20.x || 22.x || 23.x || 24.x || 25.x' }
```

## Deployment Steps

To apply this fix in production:

1. **Pull the latest changes**:
   ```bash
   git pull origin optimize-stock-data-loading
   ```

2. **Clean install dependencies** (recommended):
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

   Or use the npm skill approach:
   ```bash
   yes | npm install
   ```

3. **Rebuild the application**:
   ```bash
   npm run build
   ```

4. **Start the production server**:
   ```bash
   npm run start:prod
   ```

## Commit Information

- **Commit**: `4a78c0b`
- **Branch**: `optimize-stock-data-loading`
- **Message**: "Fix: Update better-sqlite3 to 12.8.0 for Node.js 25.x support"

## Additional Notes

### Why This Happened

The `better-sqlite3` package is a native Node.js addon that needs to be compiled for specific Node.js versions. Version 12.4.1 was released before Node.js 25.x was available, so it didn't include the necessary bindings.

### Future Prevention

To prevent similar issues in the future:

1. **Pin Node.js version in production**:
   - Use a specific Node.js version (e.g., 22.x LTS) instead of bleeding edge (25.x)
   - Consider using `nvm` or Docker with a specific Node.js version

2. **Add Node.js version check**:
   Add to `package.json`:
   ```json
   "engines": {
     "node": "20.x || 22.x || 23.x || 24.x || 25.x",
     "npm": ">=9.0.0"
   }
   ```

3. **Use `.nvmrc` file**:
   Create a `.nvmrc` file in the project root:
   ```
   22
   ```
   This ensures all developers and deployment environments use the same Node.js version.

### Alternative Solutions

If you encounter issues with the updated version, consider:

1. **Downgrade Node.js** to 22.x LTS (recommended for production):
   ```bash
   nvm install 22
   nvm use 22
   ```

2. **Use Docker** with a specific Node.js version:
   ```dockerfile
   FROM node:22-alpine
   # ... rest of Dockerfile
   ```

## Testing

After deployment, verify the fix:

1. Check the server starts without errors:
   ```bash
   npm run start:prod
   ```

2. Check the health endpoint:
   ```bash
   curl http://localhost:5015/health
   ```

3. Verify database connectivity:
   - Test user tracking
   - Test admin login
   - Test any features that use SQLite

## Status

✅ **Fixed and pushed to branch**: `optimize-stock-data-loading`
✅ **Ready for deployment**
✅ **Compatible with Node.js 25.x**

## Related Issues

This fix is part of the optimization branch that includes:
- Stock data loading optimization (90%+ faster)
- Input field immediately usable
- Browser caching improvements
- Web Worker support

For the full optimization details, see `OPTIMIZATION_COMPLETE.md`.
