import React from 'react';
import { CodeBlock } from '../components/CodeBlock';

export interface SectionData {
  id: string;
  number: number;
  title: string;
  description?: string;
  content: React.ReactNode;
}

const LegalDisclaimer: React.FC<{text: string}> = ({ text }) => (
    <div className="my-4 p-4 border-l-4 border-yellow-500 bg-yellow-50 text-yellow-800">
        <p><strong className="font-bold">Legal/Compliance Note:</strong> {text}</p>
    </div>
);

export const SECTIONS: SectionData[] = [
  {
    id: 'elevator-pitch',
    number: 1,
    title: 'Elevator Pitch',
    description: 'A concise summary of the business proposition.',
    content: (
        <p>
            DirectRent is a secure, commission-free real estate marketplace that directly connects verified landlords with pre-screened tenants using geolocation. By removing agents, we streamline the rental process with in-app messaging, digital lease signing, and secure escrow payments, building a trusted community for seamless, direct transactions.
        </p>
    )
  },
  {
    id: 'target-users',
    number: 2,
    title: 'Target Users & Differentiation',
    description: 'Understanding who we serve and what makes us unique.',
    content: (
        <>
            <h4>Target Users</h4>
            <ul>
                <li><strong>Tenants:</strong> Tech-savvy millennials and Gen Z renters in urban areas, international students, and relocating professionals looking for transparent, agent-free rental processes.</li>
                <li><strong>Landlords:</strong> Small-scale, independent landlords and property owners (1-10 properties) seeking to reduce management overhead, avoid high agent fees, and gain direct control over tenant selection and communication.</li>
            </ul>
            <h4>Pain Points Solved</h4>
            <ul>
                <li><strong>For Tenants:</strong> Eliminates exorbitant broker fees, fake listings, slow communication through intermediaries, and lack of transparency in the application process.</li>
                <li><strong>For Landlords:</strong> Reduces reliance on costly real estate agents, provides access to a pool of verified tenants, simplifies listing management, and secures payments.</li>
            </ul>
            <h4>Competitive Differentiation</h4>
            <ul>
                <li><strong>Mandatory KYC for All:</strong> Creates a high-trust environment by verifying the identities of both landlords and tenants before any transaction can occur.</li>
                <li><strong>Agent-Free Model:</strong> Our core value proposition is disintermediation, leading to significant cost savings for both parties.</li>
                <li><strong>Integrated End-to-End Workflow:</strong> From discovery and communication to lease signing and payments, the entire rental lifecycle is managed within one platform.</li>
                <li><strong>Geolocation at the Core:</strong> Hyper-localized search and discovery tools (heatmaps, commute filters) provide a superior user experience.</li>
            </ul>
        </>
    )
  },
  {
    id: 'core-features',
    number: 3,
    title: 'Core Features',
    description: 'Key functionalities broken down by user role.',
    content: (
        <>
            <h4>Tenant Features</h4>
            <ul>
                <li><strong>Verified Profile & KYC:</strong> Securely upload documents for identity and financial verification to build trust.</li>
                <li><strong>Geo-based Search & Filters:</strong> Advanced search with map interface, radius search, commute time filters, and amenity selection.</li>
                <li><strong>Direct Messaging:</strong> Secure, in-app chat with landlords to ask questions and schedule viewings.</li>
                <li><strong>Booking & Escrow Payments:</strong> Request to book a property and securely pay the deposit/first month's rent into an escrow account.</li>
                <li><strong>Digital Lease Signing:</strong> Review and e-sign lease agreements directly within the app.</li>
                <li><strong>Rating & Review System:</strong> Rate landlords and properties post-tenancy to help the community.</li>
            </ul>
            <h4>Landlord Features</h4>
            <ul>
                <li><strong>Verified Profile & KYC:</strong> Complete identity and property ownership verification to list properties.</li>
                <li><strong>Listing Management:</strong> Easily create, edit, and publish detailed property listings with photos, amenities, and availability calendars.</li>
                <li><strong>Tenant Screening Tools:</strong> View verified tenant profiles, including their KYC status and rental history (with consent).</li>
                <li><strong>Direct Messaging:</strong> Communicate directly with prospective tenants.</li>
                <li><strong>Lease Generation:</strong> Use templates to generate standardized, legally-vetted (where applicable) lease agreements.</li>
                <li><strong>Payment Dashboard:</strong> Track payments, manage deposits, and view transaction history.</li>
            </ul>
            <h4>Admin Features</h4>
            <ul>
                <li><strong>User Management & KYC Dashboard:</strong> View and manage user verification statuses and intervene in manual reviews.</li>
                <li><strong>Listing Moderation:</strong> Review flagged listings, detect fraud, and enforce platform rules.</li>
                <li><strong>Dispute Resolution Center:</strong> Mediate disputes between landlords and tenants regarding payments or lease terms.</li>
                <li><strong>Platform Analytics:</strong> Monitor key metrics like sign-ups, listings, bookings, and revenue.</li>
            </ul>
        </>
    )
  },
  {
    id: 'kyc-flow',
    number: 4,
    title: 'KYC & Verification Flow',
    description: 'Ensuring trust and safety through a robust identity verification process.',
    content: (
        <>
            <p>We will partner with third-party identity verification providers (e.g., Stripe Identity, Onfido, Veriff) to automate this process. The flow is critical for fraud prevention.</p>
            
            <h4>KYC Flow Steps (Both Tenant & Landlord)</h4>
            <ol>
                <li><strong>Sign-up:</strong> User creates an account with basic information (email, password).</li>
                <li><strong>Initiate Verification:</strong> User is prompted to verify their identity before they can message, list (landlord), or book (tenant).</li>
                <li><strong>Document Capture:</strong> User is guided to take a photo of their government-issued ID (e.g., Passport, Driver's License) and a live selfie (liveness check).</li>
                <li><strong>Data Extraction & Verification:</strong> The third-party service extracts data from the ID, checks its validity, and uses biometric analysis to match the selfie to the ID photo.</li>
                <li><strong>Anti-Fraud Checks:</strong>
                    <ul>
                        <li>Cross-reference against global watchlists (AML/Sanctions screening).</li>
                        <li>Check for document tampering.</li>
                        <li>Velocity checks (e.g., multiple accounts with same ID).</li>
                    </ul>
                </li>
                <li><strong>Status Update:</strong> The user's profile is updated with a verification status (e.g., Pending, Verified, Rejected).</li>
            </ol>

            <h4>Verification Levels & Required Documents</h4>
            <h5>Level 1: Basic Verification (Required for all users)</h5>
            <ul>
                <li><strong>Documents:</strong> Government-issued Photo ID.</li>
                <li><strong>Checks:</strong> ID validity, biometric selfie match.</li>
                <li><strong>Grants Access To:</strong> Messaging, saving listings.</li>
            </ul>

            <h5>Level 2: Enhanced Verification (Required to transact)</h5>
            <ul>
                <li><strong>Tenant:</strong> Proof of income (e.g., pay stubs, bank statement connection via Plaid-like service). Optional: soft credit check.</li>
                <li><strong>Landlord:</strong> Proof of property ownership (e.g., deed, utility bill, property tax statement).</li>
                <li><strong>Grants Access To:</strong> Listing a property (Landlord), booking a property (Tenant).</li>
            </ul>

            <LegalDisclaimer text="KYC/AML regulations are highly region-specific. Counsel must be consulted to ensure compliance with local laws (e.g., GDPR in Europe, CCPA in California) regarding data collection and storage." />
        </>
    )
  },
  {
    id: 'geo-discovery',
    number: 5,
    title: 'Geo-Based Discovery & Matching',
    description: 'Leveraging location data for a superior search experience.',
    content: (
        <>
            <h4>Geolocation Usage</h4>
            <ul>
                <li><strong>Map-Based Radius Search:</strong> The primary search interface will be a map where users can draw a search area or search around a specific point (e.g., "within 2 miles of Google HQ").</li>
                <li><strong>Neighborhood Heatmaps:</strong> Overlay data on the map to visualize key neighborhood characteristics like average rent prices, safety scores (from public data), or density of cafes and parks.</li>
                <li><strong>Commute Filtering:</strong> A killer feature. Users can input a destination (e.g., office address) and a maximum commute time (e.g., "30 mins by public transit"). We will use a transit API (like Google Maps Platform) to show only listings that meet this criterion.</li>
            </ul>
            <h4>Indexing Strategy</h4>
            <p>
                Listings will be indexed in a database with strong geospatial capabilities (e.g., PostgreSQL with PostGIS, or Elasticsearch). Each listing will have its latitude and longitude stored. Geospatial queries (e.g., `ST_DWithin`) will be used for efficient radius searches.
            </p>
            <h4>UX Suggestions</h4>
            <ul>
                <li><strong>Interactive Map:</strong> Listings appear as pins on the map, which update in real-time as the user pans and zooms. Clicking a pin shows a summary card.</li>
                <li><strong>Saved Locations:</strong> Allow users to save important locations like "Work" and "Partner's Office" for quick commute time checks.</li>
                <li><strong>Visual Filters:</strong> Filters for price, beds, etc., should visually update the results on the map and a corresponding list view simultaneously.</li>
            </ul>
        </>
    )
  },
  {
    id: 'listing-data-model',
    number: 6,
    title: 'Listing Data Model',
    description: 'The complete set of fields required to represent a property listing.',
    content: (
        <>
            <p>This data model defines the structure for a single rental listing on the platform.</p>
            <ul>
                <li><strong>listing_id:</strong> UUID (Primary Key)</li>
                <li><strong>landlord_id:</strong> UUID (Foreign Key to Users table)</li>
                <li><strong>status:</strong> ENUM ('draft', 'active', 'rented', 'archived')</li>
                <li><strong>title:</strong> String (e.g., "Sunny 2-Bedroom Apartment in Downtown")</li>
                <li><strong>description:</strong> Text</li>
                <li><strong>property_type:</strong> ENUM ('apartment', 'house', 'condo', 'studio')</li>
                <li><strong>address:</strong>
                    <ul>
                        <li><strong>street:</strong> String</li>
                        <li><strong>city:</strong> String</li>
                        <li><strong>state:</strong> String</li>
                        <li><strong>zip_code:</strong> String</li>
                        <li><strong>country:</strong> String</li>
                    </ul>
                </li>
                <li><strong>geocoordinates:</strong>
                    <ul>
                        <li><strong>latitude:</strong> Float</li>
                        <li><strong>longitude:</strong> Float</li>
                    </ul>
                </li>
                <li><strong>pricing:</strong>
                    <ul>
                        <li><strong>rent_amount:</strong> Integer (in cents)</li>
                        <li><strong>rent_currency:</strong> String (e.g., "USD")</li>
                        <li><strong>rent_period:</strong> ENUM ('monthly', 'weekly')</li>
                        <li><strong>deposit_amount:</strong> Integer (in cents)</li>
                        <li><strong>utilities_included:</strong> Array of Strings (e.g., ["water", "gas"])</li>
                    </ul>
                </li>
                <li><strong>details:</strong>
                    <ul>
                        <li><strong>bedrooms:</strong> Integer</li>
                        <li><strong>bathrooms:</strong> Float (e.g., 1.5)</li>
                        <li><strong>square_footage:</strong> Integer</li>
                        <li><strong>furnished:</strong> Boolean</li>
                    </ul>
                </li>
                <li><strong>amenities:</strong> Array of Strings (e.g., ["wifi", "gym", "pool", "in_unit_laundry"])</li>
                {/* FIX: The object shape description was causing a JSX error because it was being interpreted as code. Wrapping it in a <code> tag and a template literal treats it as a string. */}
                <li><strong>photos:</strong> Array of Objects (<code>{`{ url: String, caption: String }`}</code>)</li>
                <li><strong>availability:</strong>
                    <ul>
                        <li><strong>available_date:</strong> Date</li>
                        {/* FIX: The object shape description was causing a JSX error because it was being interpreted as code. Wrapping it in a <code> tag and a template literal treats it as a string. */}
                        <li><strong>calendar:</strong> Array of Objects (<code>{`{ date: Date, status: 'available' | 'booked' }`}</code>) <em>(For advanced features)</em></li>
                    </ul>
                </li>
                <li><strong>lease_terms:</strong>
                    <ul>
                        <li><strong>min_lease_length_months:</strong> Integer</li>
                        <li><strong>max_lease_length_months:</strong> Integer</li>
                        <li><strong>pet_policy:</strong> ENUM ('no_pets', 'cats_only', 'dogs_only', 'pets_allowed')</li>
                        <li><strong>smoking_policy:</strong> Boolean (is_allowed)</li>
                    </ul>
                </li>
                <li><strong>verification_status:</strong>
                    <ul>
                        <li><strong>landlord_id_verified:</strong> Boolean</li>
                        <li><strong>property_ownership_verified:</strong> Boolean</li>
                    </ul>
                </li>
                <li><strong>timestamps:</strong>
                    <ul>
                        <li><strong>created_at:</strong> Timestamp</li>
                        <li><strong>updated_at:</strong> Timestamp</li>
                    </ul>
                </li>
            </ul>
        </>
    )
  },
  {
    id: 'database-schema',
    number: 7,
    title: 'Database Schema & Sample JSON',
    description: 'A look at the underlying data structure and a concrete example.',
    content: (
        <>
            <h4>Sample Tables (PostgreSQL-like syntax)</h4>
            <CodeBlock language="SQL" code={`
CREATE TABLE users (
    user_id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    user_role VARCHAR(10) NOT NULL, -- 'tenant' or 'landlord'
    kyc_level INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE listings (
    listing_id UUID PRIMARY KEY,
    landlord_id UUID REFERENCES users(user_id),
    status VARCHAR(20) NOT NULL DEFAULT 'draft',
    title VARCHAR(255) NOT NULL,
    description TEXT,
    rent_amount INT NOT NULL,
    rent_currency CHAR(3) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    -- ... other fields from data model ...
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE bookings (
    booking_id UUID PRIMARY KEY,
    listing_id UUID REFERENCES listings(listing_id),
    tenant_id UUID REFERENCES users(user_id),
    status VARCHAR(20) NOT NULL, -- 'pending', 'confirmed', 'active', 'completed'
    lease_start_date DATE NOT NULL,
    lease_end_date DATE NOT NULL,
    payment_id VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
            `} />
            <h4>Sample Listing JSON</h4>
            <CodeBlock language="JSON" code={`
{
  "listing_id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "landlord_id": "f0e9d8c7-b6a5-4321-fedc-ba9876543210",
  "status": "active",
  "title": "Modern Loft with Stunning City Views",
  "description": "A beautifully designed loft in the heart of the tech district. Floor-to-ceiling windows, polished concrete floors, and a private balcony.",
  "property_type": "apartment",
  "address": {
    "street": "123 Main St, Apt 4B",
    "city": "San Francisco",
    "state": "CA",
    "zip_code": "94105",
    "country": "USA"
  },
  "geocoordinates": {
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  "pricing": {
    "rent_amount": 350000,
    "rent_currency": "USD",
    "rent_period": "monthly",
    "deposit_amount": 350000,
    "utilities_included": ["water", "trash"]
  },
  "details": {
    "bedrooms": 1,
    "bathrooms": 1.0,
    "square_footage": 850,
    "furnished": false
  },
  "amenities": ["in_unit_laundry", "gym", "rooftop_deck", "dishwasher"],
  "photos": [
    { "url": "https://picsum.photos/1024/768?random=1", "caption": "Living Room" },
    { "url": "https://picsum.photos/1024/768?random=2", "caption": "Kitchen" }
  ],
  "availability": {
    "available_date": "2024-09-01"
  },
  "lease_terms": {
    "min_lease_length_months": 12,
    "max_lease_length_months": 24,
    "pet_policy": "cats_only",
    "smoking_policy": false
  },
  "verification_status": {
    "landlord_id_verified": true,
    "property_ownership_verified": true
  },
  "created_at": "2024-07-21T10:00:00Z"
}
            `} />
        </>
    )
  },
  {
    id: 'api-design',
    number: 8,
    title: 'API Design',
    description: 'Representative REST endpoints for core platform actions.',
    content: (
        <>
            <ol>
                <li>
                    <strong>User Signup:</strong>
                    <CodeBlock language="HTTP" code={`
POST /api/v1/users/signup
Request: { "email": "user@example.com", "password": "...", "role": "tenant" }
Response: { "user_id": "...", "token": "jwt_token" }
                    `} />
                </li>
                <li>
                    <strong>Submit KYC Documents:</strong>
                    <CodeBlock language="HTTP" code={`
POST /api/v1/kyc/submit
(Multipart form-data with ID image, selfie)
Response: { "kyc_status": "pending_review" }
                    `} />
                </li>
                <li>
                    <strong>Create a Listing:</strong>
                    <CodeBlock language="HTTP" code={`
POST /api/v1/listings
Request: { /* full listing JSON object */ }
Response: { "listing_id": "...", "status": "draft" }
                    `} />
                </li>
                <li>
                    <strong>Search Listings:</strong>
                    <CodeBlock language="HTTP" code={`
GET /api/v1/listings/search?lat=37.7&lon=-122.4&radius=5&min_rent=2000
Response: { "results": [ { /* listing summary */ }, ... ] }
                    `} />
                </li>
                <li>
                    <strong>Get Listing Details:</strong>
                    <CodeBlock language="HTTP" code={`
GET /api/v1/listings/:listing_id
Response: { /* full listing JSON object */ }
                    `} />
                </li>
                <li>
                    <strong>Create a Booking Request:</strong>
                    <CodeBlock language="HTTP" code={`
POST /api/v1/bookings
Request: { "listing_id": "...", "start_date": "2024-09-01" }
Response: { "booking_id": "...", "status": "pending_landlord_approval" }
                    `} />
                </li>
                <li>
                    <strong>Create Payment Intent (Escrow):</strong>
                    <CodeBlock language="HTTP" code={`
POST /api/v1/payments/intent
Request: { "booking_id": "..." }
Response: { "client_secret": "pi_...", "amount": 350000 }
                    `} />
                </li>
                <li>
                    <strong>Send Message:</strong>
                    <CodeBlock language="HTTP" code={`
POST /api/v1/messages
Request: { "recipient_id": "...", "text": "Hi, is this available?" }
Response: { "message_id": "...", "status": "sent" }
                    `} />
                </li>
                 <li>
                    <strong>Get Messages in a Conversation:</strong>
                    <CodeBlock language="HTTP" code={`
GET /api/v1/messages/:user_id
Response: { "messages": [ { "sender_id": "...", "text": "...", "timestamp": "..." }, ... ] }
                    `} />
                </li>
                <li>
                    <strong>Admin: Moderate Listing:</strong>
                    <CodeBlock language="HTTP" code={`
PUT /api/v1/admin/listings/:listing_id/moderate
Request: { "action": "archive", "reason": "suspected_fraud" }
Response: { "status": "success" }
                    `} />
                </li>
            </ol>
        </>
    )
  },
  {
    id: 'user-flows',
    number: 9,
    title: 'User Flows & Wireframe Copy',
    description: 'Key user journeys through the platform.',
    content: (
        <>
            <h4>Onboarding (Tenant & Landlord)</h4>
            <p><strong>Copy:</strong> "Welcome to DirectRent! Let's get you verified to unlock a trusted rental experience. It only takes 2 minutes."</p>
            <ol>
                <li>Sign up with email/password.</li>
                <li>Choose role: "I'm looking for a place" vs. "I want to rent my property".</li>
                <li>Prompt for Level 1 KYC (ID + Selfie).</li>
                <li>Landlords are then guided to Level 2 KYC (Proof of Ownership) to create a listing.</li>
                <li>Tenants are prompted for Level 2 KYC (Proof of Income) when they request to book.</li>
            </ol>
            <h4>Creating a Listing</h4>
            <p><strong>Copy:</strong> "Create a standout listing. Provide details and photos to attract the best tenants."</p>
            <ol>
                <li>Multi-step form: Address -> Details (beds/baths) -> Pricing -> Amenities -> Photos -> Lease Terms.</li>
                <li>Address input uses geocoding to auto-fill lat/long.</li>
                <li>Real-time preview of the listing card.</li>
                <li>Final "Publish" step requires landlord's KYC to be complete.</li>
            </ol>
            <h4>Searching & Filtering</h4>
            <p><strong>Copy:</strong> "Find your next home. Use the map and filters to narrow your search."</p>
            <ol>
                <li>User lands on a map view centered on their location (or a default city).</li>
                <li>Filters are prominent: Price, Beds/Baths, Property Type, Commute Time.</li>
                <li>User can draw on the map or search an address.</li>
                <li>Results update instantly on map and in a side-by-side list view.</li>
            </ol>
             <h4>Booking with Escrow</h4>
            <p><strong>Copy:</strong> "Your payment is safe with us. We'll hold your deposit and first month's rent securely until 24 hours after you move in."</p>
            <ol>
                <li>Tenant clicks "Request to Book" on a listing.</li>
                <li>Landlord receives request and approves/denies.</li>
                <li>Upon approval, tenant is prompted to pay deposit + first rent into escrow.</li>
                <li>Payment is confirmed, booking is secured.</li>
            </ol>
             <h4>Signing a Lease</h4>
            <p><strong>Copy:</strong> "Finalize the details. Review and sign your lease agreement digitally."</p>
            <ol>
                <li>Landlord generates a lease from a template or uploads their own.</li>
                <li>Tenant receives a notification to review the lease.</li>
                <li>Both parties e-sign the document within the platform (via a Docusign/Hellosign-like integration).</li>
                <li>Signed lease is accessible to both parties in their dashboards.</li>
            </ol>
             <h4>Reporting & Dispute Flow</h4>
            <p><strong>Copy:</strong> "Need help? Report an issue with a listing or a user, or open a dispute for our team to review."</p>
            <ol>
                <li>User clicks "Report" on a listing or user profile.</li>
                <li>Selects a reason (e.g., "Seems like a scam," "Inaccurate photos").</li>
                <li>For payment issues, a "Dispute" button appears on the transaction.</li>
                <li>A ticket is created for the admin team to investigate, pausing any fund release if related to a payment.</li>
            </ol>
        </>
    )
  },
  {
    id: 'payments-escrow',
    number: 10,
    title: 'Payments & Escrow Model',
    description: 'How money moves securely through the platform.',
    content: (
        <>
            <h4>Payment Flow</h4>
            <ol>
                <li><strong>Booking Confirmation:</strong> Once a landlord approves a booking, the tenant is prompted to pay the security deposit and first month's rent.</li>
                <li><strong>Funds Held in Escrow:</strong> Payment is processed via a payment provider (e.g., Stripe Connect, Adyen) and held in a dedicated escrow account. The funds are not accessible to the landlord yet.</li>
                <li><strong>Move-in Day:</strong> The move-in date arrives. A 24-hour "safety window" begins.</li>
                <li><strong>Funds Released:</strong> 24 hours after the scheduled move-in time, if no dispute is raised by the tenant, the funds are automatically released to the landlord's connected bank account.</li>
            </ol>

            <h4>Chargebacks & Disputes</h4>
            <p>The 24-hour safety window drastically reduces "item not as described" chargebacks. For fraudulent chargebacks after fund release, we will work with our payment provider, providing evidence like the signed lease and communication logs.</p>
            
            <h4>Currencies & Crypto</h4>
            <p>Initially, support major fiat currencies (USD, EUR, GBP) based on launch markets. Crypto acceptance is a future consideration; it would require a specialized payment gateway and poses regulatory/volatility challenges. If implemented, it would likely be for holding deposits, converting to fiat upon receipt to mitigate risk.</p>
            
            <h4>Fee Model</h4>
            <p>Recommended starting model: <strong>Commission-based on successful booking.</strong></p>
            <ul>
                <li><strong>Tenant Service Fee:</strong> 3-5% of the first month's rent. Justified by KYC services and payment protection.</li>
                <li><strong>Landlord Service Fee:</strong> 1-2% of the monthly rent, charged on each transaction. Significantly cheaper than a traditional agent's fee (often a full month's rent).</li>
            </ul>

            <LegalDisclaimer text="Money transmission and escrow services are heavily regulated. A licensed payment facilitator is required, and legal counsel must approve the entire flow to ensure compliance with financial regulations in each operating region." />
        </>
    )
  },
  {
    id: 'moderation-trust',
    number: 11,
    title: 'Moderation & Trust Signals',
    description: 'Features designed to build user confidence and maintain a safe marketplace.',
    content: (
        <>
            <ul>
                <li><strong>Verification Badges:</strong> Prominently display badges on user profiles and listings: "ID Verified", "Income Verified" (Tenant), "Ownership Verified" (Landlord). These are powerful trust indicators.</li>
                <li><strong>Photo Verification (Future):</strong> For high-risk listings, an optional service where we send a local photographer or use an AI tool to verify that listing photos match a recent video walkthrough, combating bait-and-switch scams.</li>
                <li><strong>Listing QA Checks:</strong> Automated checks will flag listings with suspicious characteristics (e.g., rent significantly below market rate, gibberish descriptions, stock photos). These are queued for manual admin review.</li>
                <li><strong>Community Reporting:</strong> Easy-to-use "Report" buttons on listings and profiles. Listings with multiple flags are automatically de-listed pending review.</li>
                <li><strong>Suspension Rules:</strong> A clear, tiered policy for violations. E.g., a warning for a minor infraction, temporary suspension for repeated issues, and a permanent ban for fraud or KYC failure.</li>
            </ul>
        </>
    )
  },
  {
    id: 'security-privacy-legal',
    number: 12,
    title: 'Security, Privacy & Legal',
    description: 'Addressing critical compliance and data protection considerations.',
    content: (
        <>
            <h4>Data Retention & PII Handling</h4>
            <ul>
                <li><strong>Data Minimization:</strong> Only collect the data absolutely necessary for verification and transactions. Do not store sensitive data like full bank account numbers; rely on tokens from our payment provider.</li>
                <li><strong>KYC Data:</strong> Sensitive ID documents should not be stored on our servers. They should be passed directly to the third-party KYC provider, and we only store the resulting status ("verified" or "rejected").</li>
                <li><strong>Data Encryption:</strong> All data, both in transit (TLS 1.2+) and at rest (AES-256), must be encrypted.</li>
            </ul>
            <h4>GDPR/Privacy Checklist</h4>
            <ul>
                <li><strong>Right to Access:</strong> Users must be able to request a copy of their data.</li>
                <li><strong>Right to be Forgotten:</strong> Users must be able to delete their account and associated PII (subject to legal requirements for retaining transaction data for a certain period).</li>
                <li><strong>Consent:</strong> Clear, explicit consent must be obtained for data processing activities, especially for things like optional credit checks.</li>
                <li><strong>Privacy Policy:</strong> A comprehensive and easy-to-understand privacy policy is mandatory.</li>
            </ul>
            <LegalDisclaimer text="This entire section requires extensive review by legal counsel specializing in data privacy (like GDPR, CCPA) and real estate law. Tenancy laws vary dramatically by state/country and will affect lease templates and dispute resolution processes." />
        </>
    )
  },
  {
    id: 'mvp-roadmap',
    number: 13,
    title: 'MVP Scope & 8-Week Roadmap',
    description: 'A plan for launching a minimal viable product and iterating.',
    content: (
        <>
            <h4>MVP Scope (Minimal Features to Ship)</h4>
            <p>Focus on one city. Core loop: Landlord lists, Tenant finds, they message, agree on terms externally, and we confirm the match. Defer integrated payments and e-signing to post-MVP to reduce complexity.</p>
            <ul>
                <li>User signup and role selection (Tenant/Landlord).</li>
                <li>Manual, admin-backed KYC (slow but proves the model).</li>
                <li>Manual listing creation and publishing.</li>
                <li>Map-based search with basic filters (price, beds).</li>
                <li>In-app messaging.</li>
            </ul>
            <h4>8-Week Roadmap</h4>
            <ul>
                <li><strong>Weeks 1-2:</strong> Tech setup, database schema, user authentication, and basic KYC submission flow (UI only).</li>
                <li><strong>Weeks 3-4:</strong> Build listing creation flow for landlords and search/map view for tenants.</li>
                <li><strong>Weeks 5-6:</strong> Implement in-app messaging. Build basic admin panel for manual KYC/listing approval.</li>
                <li><strong>Week 7:</strong> Internal testing, bug fixing, and deployment preparation.</li>
                <li><strong>Week 8:</strong> Soft launch in a single target neighborhood/city. Begin onboarding initial landlords.</li>
            </ul>
            <h4>Key Metrics to Track</h4>
            <ul>
                <li><strong>Activation:</strong> % of signups who complete KYC; % of landlords who post a listing.</li>
                <li><strong>Liquidity:</strong> Number of active listings; number of messages sent per listing.</li>
                <li><strong>Conversion:</strong> % of conversations that lead to a booking (initially tracked manually).</li>
                <li><strong>CAC (Customer Acquisition Cost) & LTV (Lifetime Value):</strong> Long-term metrics to track post-launch.</li>
            </ul>
        </>
    )
  },
  {
    id: 'monetization',
    number: 14,
    title: 'Monetization',
    description: 'How the platform will generate revenue.',
    content: (
        <>
            <h4>Monetization Options</h4>
            <ol>
                <li><strong>Commission (Recommended):</strong> Take a percentage of each transaction. Aligns our success with user success.</li>
                <li><strong>Per-Listing Fee:</strong> Landlords pay a flat fee to post a listing for a certain period. Simple, but doesn't capture value from high-rent properties.</li>
                <li><strong>Subscription:</strong> Landlords pay a monthly fee for advanced tools or to post multiple listings. Better for property managers, less so for individual landlords.</li>
                <li><strong>Freemium:</strong> Basic listing is free, but landlords pay for premium features like "promote listing", background checks, or lease generation.</li>
            </ol>
            <h4>Recommended First Model & Price Points</h4>
            <p><strong>Commission-based model is best for building initial liquidity.</strong></p>
            <ul>
                <li><strong>Tenant Service Fee:</strong> 5% of the first month's rent (or a fixed fee for lower rents). Capped at $250.</li>
                <li><strong>Landlord Service Fee:</strong> Waived for the first 6 months to attract listings. Then, introduce a 2% fee on monthly rent collection (if we build that feature) or a 1.5% fee on the first month's rent.</li>
            </ul>
            <p>This model is low-risk for early adopters and clearly demonstrates our value proposition of being cheaper than traditional agents.</p>
        </>
    )
  },
  {
    id: 'risks-mitigation',
    number: 15,
    title: 'Risks & Mitigation',
    description: 'Identifying potential challenges and planning for them.',
    content: (
        <>
            <ul>
                <li>
                    <strong>Risk: Fraud & Fake Listings.</strong>
                    <br />
                    <em>Mitigation:</em> Mandatory landlord KYC and proof of ownership is our primary defense. Community reporting and AI-powered listing analysis will add further layers.
                </li>
                <li>
                    <strong>Risk: Building Two-Sided Marketplace Liquidity (Chicken & Egg).</strong>
                    <br />
                    <em>Mitigation:</em> Focus on one side first: landlords. Hyper-focus on a specific city/neighborhood. Offer significant incentives for the first 100 landlords (e.g., no fees for a year, free professional photography).
                </li>
                <li>
                    <strong>Risk: Legal & Regulatory Hurdles.</strong>
                    <br />
                    <em>Mitigation:</em> Engage legal counsel from day one. Launch in a single, well-understood jurisdiction before expanding. Design the platform to be flexible to accommodate different local laws.
                </li>
                <li>
                    <strong>Risk: Lack of Trust / User Safety.</strong>
                    <br />
                    <em>Mitigation:</em> Trust is our core product. Emphasize KYC, secure payments, and transparent reviews. Provide safety guidelines for in-person viewings. Implement a robust dispute resolution process.
                </li>
            </ul>
        </>
    )
  },
  {
    id: 'deliverables',
    number: 16,
    title: 'Deliverables',
    description: 'Concrete examples of key artifacts.',
    content: (
        <>
            <h4>Sample Landlord Listing JSON (Complete)</h4>
            <CodeBlock language="JSON" code={`
{
  "listing_id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  "landlord_id": "f0e9d8c7-b6a5-4321-fedc-ba9876543210",
  "status": "active",
  "title": "Modern Loft with Stunning City Views",
  "description": "A beautifully designed loft in the heart of the tech district. Floor-to-ceiling windows, polished concrete floors, and a private balcony.",
  "property_type": "apartment",
  "address": { "street": "123 Main St, Apt 4B", "city": "San Francisco", "state": "CA", "zip_code": "94105", "country": "USA" },
  "geocoordinates": { "latitude": 37.7749, "longitude": -122.4194 },
  "pricing": { "rent_amount": 350000, "rent_currency": "USD", "rent_period": "monthly", "deposit_amount": 350000, "utilities_included": ["water", "trash"] },
  "details": { "bedrooms": 1, "bathrooms": 1.0, "square_footage": 850, "furnished": false },
  "amenities": ["in_unit_laundry", "gym", "rooftop_deck", "dishwasher"],
  "photos": [ { "url": "https://picsum.photos/1024/768?random=1", "caption": "Living Room" }, { "url": "https://picsum.photos/1024/768?random=2", "caption": "Kitchen" } ],
  "availability": { "available_date": "2024-09-01" },
  "lease_terms": { "min_lease_length_months": 12, "max_lease_length_months": 24, "pet_policy": "cats_only", "smoking_policy": false },
  "verification_status": { "landlord_id_verified": true, "property_ownership_verified": true },
  "created_at": "2024-07-21T10:00:00Z"
}
            `} />
            <h4>Minimal DB Table `CREATE` Description</h4>
            <CodeBlock language="SQL" code={`
-- Users table to store tenants and landlords
CREATE TABLE users (
    user_id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    user_role VARCHAR(10) NOT NULL CHECK (user_role IN ('tenant', 'landlord')),
    kyc_status VARCHAR(20) DEFAULT 'not_started',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Listings table with geospatial index
CREATE TABLE listings (
    listing_id UUID PRIMARY KEY,
    landlord_id UUID NOT NULL REFERENCES users(user_id),
    status VARCHAR(20) NOT NULL DEFAULT 'draft',
    title VARCHAR(255) NOT NULL,
    rent_amount INT NOT NULL, -- in cents
    geocoordinates GEOMETRY(Point, 4326), -- Store location for geo-queries
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX listings_geo_idx ON listings USING GIST (geocoordinates);
            `} />
            <h4>Sample Admin Moderation Rule</h4>
            <p><strong>Rule:</strong> "Flag Listing if Price is 50% below Neighborhood Average"</p>
            <ol>
                <li><strong>Trigger:</strong> A new listing is created or an existing listing's price is updated.</li>
                <li><strong>Action:</strong>
                    <ol>
                        <li>Calculate the average rent for similar properties (e.g., same property type, +/- 1 bedroom) within a 1-mile radius.</li>
                        <li>If the listing's price is less than 50% of this calculated average, automatically change its status to "pending_review".</li>
                        <li>Create a ticket in the admin moderation queue with the tag "price_anomaly".</li>
                    </ol>
                </li>
                <li><strong>Resolution:</strong> An admin must manually review the listing. They can either approve it (if there's a valid reason for the low price) or archive it and contact the landlord if it's suspected fraud.</li>
            </ol>
        </>
    )
  },
  {
    id: 'next-steps',
    number: 17,
    title: 'Actionable Next Steps',
    description: 'A summary of immediate priorities to move forward.',
    content: (
      <>
        <ol>
            <li><strong>Engage Legal Counsel:</strong> The highest priority is to get expert legal advice on KYC/AML, data privacy (GDPR/CCPA), real estate tenancy laws, and financial regulations for the target launch market. This will inform critical product decisions.</li>
            <li><strong>Technical Scaffolding & Prototyping:</strong> Begin the 8-week MVP roadmap. Set up the development environment, choose the tech stack (e.g., React, Node.js, PostgreSQL/PostGIS), and start building the core user authentication and KYC submission flows.</li>
            <li><strong>UX/UI Design Sprints:</strong> Create high-fidelity mockups and a clickable prototype for the key user flows (onboarding, search, listing creation). Test these with potential users (both tenants and landlords) to gather early feedback.</li>
            <li><strong>Landlord Pre-launch Campaign:</strong> Start identifying and building relationships with potential early-adopter landlords in the target launch neighborhood. Create a simple landing page to capture interest and offer them a compelling "founding member" deal to solve the chicken-and-egg problem.</li>
        </ol>
      </>
    )
  }
];
