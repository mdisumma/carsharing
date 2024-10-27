# Nimbus README

Welcome to **Nimbus**! Nimbus is a mobile-first carsharing platform designed for eco-conscious commuters to share rides, reduce emissions, and create a happier, healthier commute for both people and the planet.

---

## 🎮 Key Features & Gamification

Nimbus goes beyond just carpooling; we’ve built a platform centered around **gamification** to encourage continuous and rewarding use for drivers and passengers alike:

1. **Eco-Points**  
   - **Earn eco-points** for every passenger you pick up.
   - Redeem points for real-life rewards, including family day outings, free MOTs, car washes, and discounts with partnered companies.
  
2. **Milestone Badges**  
   - Drivers can earn badges for various milestones, such as:
     - Total mileage
     - Number of passengers picked up
     - Positive reviews
     - CO2 saved
     
3. **Leaderboard & Lottery Rewards**  
   - Climb the leaderboard to unlock exclusive rewards.
   - Drivers at the top are entered into a monthly lottery for even bigger prizes!

4. **Driver Profile Customization**  
   - Drivers can specify relationship status, making it easier for passengers to find compatible travel partners.

5. **Passenger Subscription**  
   - Passengers pay a monthly subscription that contributes to the eco-point reward pool distributed to drivers.

---

## 🚗 User Journeys

**Driver Journey**
1. Drivers sign up, log in, and verify their ID.
2. Add commute details, which will be visible to potential passengers.
3. Receive ride requests from passengers and engage in a chat to agree on pickup time and location.
4. Accept or decline ride requests based on the agreed terms.
5. Complete the commute and redeem eco-points for rewards.

**Passenger Journey**
1. Passengers log in and view available rides.
2. Request a ride, initiate chat with the driver to confirm pickup details.
3. Complete the commute and provide feedback or review to enhance the driver’s score.
4. Payment and eco-points distribution occur automatically at the end of the ride.

---

## ✨ Additional Features

- **Google Maps & Location APIs**  
  Nimbus integrates the **Google Maps API** and location search APIs to streamline route planning, pickup location search, and navigation.

- **Networking Opportunities**  
  Meet and network with other urban professionals sharing the same commute.

- **Energy-Efficient Travel**  
  Shared rides lead to lower energy consumption and reduced emissions.

- **Affordable Commute**  
  With eco-points and redeemable rewards, your commute becomes more economical and eco-friendly.

---

## 💻 Tech Stack

**MVP1:**  
- **Frontend**: Next.js  
  - **Why**: Next.js is fast, SEO-friendly, and optimized for server-side rendering, making it perfect for a platform needing high-performance and scalability.  
- **Hosting**: Vercel  
  - **Why**: Seamlessly integrates with Next.js and provides easy, quick deployment with global CDN coverage for improved performance.  
- **Design**: Figma  
  - **Why**: Figma’s collaborative design tools make it easy to prototype, iterate, and share designs with the team.

**MVP2:**  
- **Mobile App**: React Native  
  - **Why**: React Native allows us to build cross-platform mobile apps for iOS and Android with one codebase, making it efficient and time-saving.  
- **Database**: MySQL  
  - **Why**: MySQL offers robust, secure data storage, and is well-suited for the structured data our platform needs to manage rides, users, and eco-points.  
- **Backend**: Supabase  
  - **Why**: Supabase offers a scalable backend that pairs well with React Native for real-time chat, notifications, and fast data access, essential for our platform.

---

## 🚀 Getting Started

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/YourUsername/nimbus.git
   ```
2. **Install Dependencies**  
   Navigate to the project folder and install the necessary packages:
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**  
   - Add your database credentials, API keys (including Google Maps), and any other necessary environment variables.
4. **Run the Development Server**  
   For Next.js:
   ```bash
   npm run dev
   ```
5. **Explore the Platform**  
   Open the app in your browser or mobile device and start exploring Nimbus’s eco-friendly carsharing experience!

---

## 📑 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

We’re thrilled to have you on this journey to create happier, eco-friendlier commutes. Share your ride, reduce your footprint, and earn rewards while saving the planet!
