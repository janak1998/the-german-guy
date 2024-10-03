import Link from "next/link";
import React from "react";

const affiliateLinks = {
  healthInsurance: {
    name: "Barmer",
    url: "https://feather-insurance.com/en/public-health-insurance/barmer?utm_source=hoc9lz2rfjmgtdp5",
  },
  legalInsurance: {
    name: "Feather",
    url: "https://feather-insurance.com/legal-insurance?utm_source=hoc9lz2rfjmgtdp5",
  },
  dentalInsurance: {
    name: "Feather",
    url: "https://feather-insurance.com/dental-insurance?utm_source=hoc9lz2rfjmgtdp5",
  },
  globalVirtualBanking: {
    name: "Revolut",
    url: "https://www.revolut.com/referral/?referral-code=awanise199!NOV2-23-AR-DXSD14-H1",
  },
  creditCard: {
    name: "Advanzia",
    url: "https://refer.gebuhrenfrei.com/1yO7VQ",
  },
  localGermanyBanking: {
    name: "Commerzbank",
    url: "https://www.commerzbank.com",
  },
  publicTransport: {
    name: "DB D-ticket",
    url: "https://www.bahn.de/angebot/regio/deutschland-ticket",
  },
  blockedAccount: {
    name: "Expatrio",
    url: "https://www.expatrio.com?p=TGG23",
  },
};

const AffiliatePartners = () => (
  <ul className="mt-4">
    {Object.entries(affiliateLinks).map(([key, { name, url }]) => (
      <li key={key} className="py-2">
        {`For ${key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())},  `}
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          go with {name} ↗
        </Link>
      </li>
    ))}
  </ul>
);

export default AffiliatePartners;
