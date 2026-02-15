# DIAN Framework
## Decentralized Integration Architecture Network

Practical integration patterns for connecting traditional finance systems with DeFi protocols.

**Live Site:** https://defi-bian-framework.vercel.app/ *(URL will be updated soon)*

---

## About

DIAN provides real-world integration patterns, architecture diagrams, code examples, and case studies showing HOW CeFi systems connect with DeFi protocols.

Inspired by BIAN's service-oriented banking architecture, DIAN goes beyond comparison to deliver actionable integration strategies.

### Key Focus

- **Integration Over Translation:** Not just "what maps to what" — learn HOW to connect systems
- **Familiar Patterns:** Understand DeFi through CeFi equivalents (APIs → Oracles, Webhooks → Events)
- **Working Examples:** Code snippets, smart contract integrations, architecture diagrams
- **Risk Analysis:** Security considerations, cost trade-offs, compliance strategies

---

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS (Modern Ledger color palette)
- **Deployment:** Vercel (auto-deploy from `main`)
- **Analytics:** (TBD)

---

## Project Structure

```
app/
├── page.tsx              # Home (integration focus)
├── about/                # About DIAN
├── framework/            # Framework overview
├── mappings/             # 8 domain clusters
├── case-studies/         # Real-world integrations
├── consulting/           # Services
└── domains/              # (coming soon) Individual domain pages

components/
├── Navigation.tsx
└── Footer.tsx
```

---

## 8 Integration Domain Clusters

1. **Payments & Settlement** — Stablecoin rails, cross-border, on/off ramps
2. **Lending & Credit** — Over-collateralized lending, RWA credit bridges
3. **Trading & Market Making** — DEX integration, AMM patterns
4. **Custody & Asset Management** — Institutional custody, yield aggregation
5. **Identity & Compliance** — KYC/AML integration, attestations
6. **Treasury & Liquidity** — DAO treasury, liquidity pools
7. **Derivatives** — Perpetual swaps, options, synthetics
8. **Governance** — DAO integration, on-chain voting

---

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Deploy (auto via Vercel when pushed to main)
git push origin main
```

---

## Author

**Marlena DeHart**  
Master's in Blockchain & Digital Currencies, University of Nicosia

Specializing in CeFi ↔ DeFi integration architecture and consulting.

- **LinkedIn:** linkedin.com/in/marlena-dehart
- **GitHub:** github.com/marv4208
- **Email:** marlena@dianframework.com

---

## License

© 2026 Marlena DeHart. All rights reserved.
