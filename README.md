Unipay is a comprehensive university payment management system designed to streamline fee transactions,
event registrations, and other financial activities within educational institutions.

Key Features:
Student Dashboard – View outstanding dues, transaction history, and payment receipts.

Event Registration & Payments – Securely register and pay for university events.

QR Code Payments – Enable seamless transactions via QR code scanning.

Secure Payment Processing – Integrates with leading payment gateways for encrypted transactions.

Admin Panel – Manage student payments, verify transactions, and generate financial reports.

Automated Notifications – Email and SMS reminders for pending payments.

1> Installation & Setup :

    git clone https://github.com/yourusername/unipay.git

    cd unipay

2> Install Dependencies :

    npm install

3> Configure Environment Variables :

Create a .env.local file in the root directory and add the following:

    MONGODB_URI=your_mongodb_connection_string

    NEXT_PUBLIC_PAYMENT_GATEWAY_KEY=your_payment_gateway_key

    NEXTAUTH_SECRET=your_auth_secret

4> Start the Application :

    npm run dev

The application will run at http://localhost:3000.




