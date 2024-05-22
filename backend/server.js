const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to handle form submission
app.post('/submit-form', (req, res) => {
  const { year, make, model, series, fuelType, cylinders, transmission, color, odometer, accidentHistory, vehicleCondition, payoff } = req.body;
  const { firstName, lastName, email, phone } = req.body;

  // Send email with form data
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // Replace with your Gmail email
      pass: 'your-password' // Replace with your Gmail password
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com', // Replace with your Gmail email
    to: 'm.abdennassar@gmail.com', // Email address to receive the form data
    subject: 'Vehicle Information Form Submission',
    html: `
      <p>Year: ${year}</p>
      <p>Make: ${make}</p>
      <p>Model: ${model}</p>
      <p>Series: ${series}</p>
      <p>Fuel Type: ${fuelType}</p>
      <p>Cylinders: ${cylinders}</p>
      <p>Transmission: ${transmission}</p>
      <p>Color: ${color}</p>
      <p>Odometer: ${odometer}</p>
      <p>Accident History: ${accidentHistory}</p>
      <p>Vehicle Condition: ${vehicleCondition}</p>
      <p>Payoff Information: ${payoff}</p>
      <br>
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ success: true, message: 'Form data submitted successfully' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
