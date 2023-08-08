import './globals.css'
import '../styles/main.css'

import 'bootstrap/dist/css/bootstrap.min.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='m-5'>{children}</body>
    </html>
  )
}
