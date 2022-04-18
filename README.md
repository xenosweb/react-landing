# Landing page made with React JS

## Demo sites

-  [x] Visit this url: https://ca.xenosweb.com

## Build and Upload to cPanel Hosting

-  [x] Replacing localhost with domain name in `package.json`.
-  [x] Build your app with `npm run build`.
-  [x] Adding .htaccess file on your main hosting folder:
       <IfModule mod_rewrite.c>
       RewriteEngine On
       RewriteBase /
       RewriteRule ^index\.html$ - [L]
       RewriteCond %{REQUEST_FILENAME} !-f
       RewriteCond %{REQUEST_FILENAME} !-d
       RewriteCond %{REQUEST_FILENAME} !-l
       RewriteRule . /index.html [L]
       </IfModule>
-  [x] Upload all your files to hosting.
