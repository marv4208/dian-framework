'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

interface Mapping {
  id: string;
  bianDomain: string;
  defiProtocol: string;
  domainCluster: string;
  integrationPattern: string;
  maturity: 'Mature' | 'Emerging' | 'Experimental';
  tvl?: string;
  gasEfficiency: 'High' | 'Medium' | 'Low';
  description: string;
  detailUrl: string;
}

const mappingData: Mapping[] = [
  // Payments & Settlement
  {
    id: 'payment-execution-usdc',
    bianDomain: 'Payment Execution',
    defiProtocol: 'USDC (Circle)',
    domainCluster: 'Payments',
    integrationPattern: 'Stablecoin Transfer',
    maturity: 'Mature',
    tvl: '$30B+',
    gasEfficiency: 'High',
    description: 'Fiat-backed stablecoin for instant on-chain payments',
    detailUrl: '/domains/payments',
  },
  {
    id: 'wire-transfer-bridge',
    bianDomain: 'Wire Transfer',
    defiProtocol: 'Across Protocol',
    domainCluster: 'Payments',
    integrationPattern: 'Cross-chain Bridge',
    maturity: 'Mature',
    tvl: '$50M+',
    gasEfficiency: 'High',
    description: 'Optimistic bridge for L2 ↔ L2 transfers',
    detailUrl: '/domains/payments',
  },
  {
    id: 'settlement-ethereum',
    bianDomain: 'Settlement',
    defiProtocol: 'Ethereum L1',
    domainCluster: 'Payments',
    integrationPattern: 'Blockchain Settlement',
    maturity: 'Mature',
    tvl: '$50B+',
    gasEfficiency: 'Low',
    description: 'Base layer for transaction finality',
    detailUrl: '/domains/payments',
  },
  {
    id: 'ach-layerzero',
    bianDomain: 'ACH',
    defiProtocol: 'LayerZero',
    domainCluster: 'Payments',
    integrationPattern: 'Omnichain Messaging',
    maturity: 'Mature',
    tvl: '$7B+',
    gasEfficiency: 'Medium',
    description: 'Cross-chain messaging protocol',
    detailUrl: '/domains/payments',
  },
  
  // Lending & Credit
  {
    id: 'loan-aave',
    bianDomain: 'Loan',
    defiProtocol: 'Aave',
    domainCluster: 'Lending',
    integrationPattern: 'Over-collateralized Lending',
    maturity: 'Mature',
    tvl: '$10B+',
    gasEfficiency: 'Medium',
    description: 'Liquidity pool model with algorithmic rates',
    detailUrl: '/domains/lending',
  },
  {
    id: 'credit-management-compound',
    bianDomain: 'Credit Management',
    defiProtocol: 'Compound',
    domainCluster: 'Lending',
    integrationPattern: 'Autonomous Interest Rate',
    maturity: 'Mature',
    tvl: '$3B+',
    gasEfficiency: 'Medium',
    description: 'cToken system with governance via COMP',
    detailUrl: '/domains/lending',
  },
  {
    id: 'collateral-management-morpho',
    bianDomain: 'Collateral Management',
    defiProtocol: 'Morpho',
    domainCluster: 'Lending',
    integrationPattern: 'P2P Matching Layer',
    maturity: 'Emerging',
    tvl: '$2B+',
    gasEfficiency: 'High',
    description: 'Peer-to-peer matching on top of Aave/Compound',
    detailUrl: '/domains/lending',
  },
  {
    id: 'corporate-loan-goldfinch',
    bianDomain: 'Corporate Loan',
    defiProtocol: 'Goldfinch',
    domainCluster: 'Lending',
    integrationPattern: 'RWA Lending',
    maturity: 'Emerging',
    tvl: '$100M+',
    gasEfficiency: 'Low',
    description: 'Undercollateralized lending to real-world businesses',
    detailUrl: '/domains/lending',
  },
  {
    id: 'flash-loan-aave',
    bianDomain: 'Short-term Loan',
    defiProtocol: 'Aave Flash Loans',
    domainCluster: 'Lending',
    integrationPattern: 'Atomic Borrowing',
    maturity: 'Mature',
    tvl: 'N/A',
    gasEfficiency: 'High',
    description: 'Zero-collateral loans repaid in same transaction',
    detailUrl: '/domains/lending',
  },
  
  // Trading & Market Making
  {
    id: 'trading-market-uniswap',
    bianDomain: 'Trading Market',
    defiProtocol: 'Uniswap V3',
    domainCluster: 'Trading',
    integrationPattern: 'Concentrated Liquidity AMM',
    maturity: 'Mature',
    tvl: '$5B+',
    gasEfficiency: 'Medium',
    description: 'Capital-efficient AMM with custom price ranges',
    detailUrl: '/domains/trading',
  },
  {
    id: 'market-making-curve',
    bianDomain: 'Market Making',
    defiProtocol: 'Curve Finance',
    domainCluster: 'Trading',
    integrationPattern: 'Stablecoin-optimized AMM',
    maturity: 'Mature',
    tvl: '$4B+',
    gasEfficiency: 'High',
    description: 'Low slippage for like-kind assets',
    detailUrl: '/domains/trading',
  },
  {
    id: 'order-routing-1inch',
    bianDomain: 'Order Routing',
    defiProtocol: '1inch Aggregator',
    domainCluster: 'Trading',
    integrationPattern: 'DEX Aggregation',
    maturity: 'Mature',
    tvl: 'N/A',
    gasEfficiency: 'Medium',
    description: 'Splits trades across multiple DEXs for best price',
    detailUrl: '/domains/trading',
  },
  {
    id: 'execution-cowswap',
    bianDomain: 'Trade Execution',
    defiProtocol: 'CoW Swap',
    domainCluster: 'Trading',
    integrationPattern: 'Batch Auction',
    maturity: 'Mature',
    tvl: '$200M+',
    gasEfficiency: 'High',
    description: 'MEV-protected batch settlement',
    detailUrl: '/domains/trading',
  },
  
  // Custody & Asset Management
  {
    id: 'custody-gnosis',
    bianDomain: 'Custody Administration',
    defiProtocol: 'Gnosis Safe',
    domainCluster: 'Custody',
    integrationPattern: 'Multisig Wallet',
    maturity: 'Mature',
    tvl: '$100B+ secured',
    gasEfficiency: 'Medium',
    description: 'M-of-N signature wallet for institutional custody',
    detailUrl: '/domains/custody',
  },
  {
    id: 'portfolio-management-yearn',
    bianDomain: 'Investment Portfolio Management',
    defiProtocol: 'Yearn Finance',
    domainCluster: 'Custody',
    integrationPattern: 'Yield Aggregation',
    maturity: 'Mature',
    tvl: '$400M+',
    gasEfficiency: 'Medium',
    description: 'Auto-compound yield across DeFi protocols',
    detailUrl: '/domains/custody',
  },
  {
    id: 'asset-management-lido',
    bianDomain: 'Asset Servicing',
    defiProtocol: 'Lido',
    domainCluster: 'Custody',
    integrationPattern: 'Liquid Staking',
    maturity: 'Mature',
    tvl: '$20B+',
    gasEfficiency: 'High',
    description: 'Stake ETH, receive liquid stETH token',
    detailUrl: '/domains/custody',
  },
  
  // Identity & Compliance
  {
    id: 'party-reference-worldcoin',
    bianDomain: 'Party Reference Data',
    defiProtocol: 'Worldcoin',
    domainCluster: 'Identity',
    integrationPattern: 'Biometric Identity',
    maturity: 'Emerging',
    tvl: 'N/A',
    gasEfficiency: 'High',
    description: 'Proof of unique human via iris scan',
    detailUrl: '/domains/identity',
  },
  {
    id: 'kyc-civic',
    bianDomain: 'Customer KYC',
    defiProtocol: 'Civic Pass',
    domainCluster: 'Identity',
    integrationPattern: 'Soulbound Credential',
    maturity: 'Emerging',
    tvl: 'N/A',
    gasEfficiency: 'High',
    description: 'On-chain KYC verification NFT',
    detailUrl: '/domains/identity',
  },
  {
    id: 'compliance-chainalysis',
    bianDomain: 'Regulatory Compliance',
    defiProtocol: 'Chainalysis',
    domainCluster: 'Identity',
    integrationPattern: 'On-chain Analytics',
    maturity: 'Mature',
    tvl: 'N/A',
    gasEfficiency: 'High',
    description: 'AML monitoring and sanctions screening',
    detailUrl: '/domains/identity',
  },
  {
    id: 'identity-ens',
    bianDomain: 'Identity Management',
    defiProtocol: 'ENS',
    domainCluster: 'Identity',
    integrationPattern: 'Name Service',
    maturity: 'Mature',
    tvl: 'N/A',
    gasEfficiency: 'Medium',
    description: 'Human-readable blockchain addresses',
    detailUrl: '/domains/identity',
  },
  
  // Treasury & Liquidity
  {
    id: 'corporate-treasury-makerdao',
    bianDomain: 'Corporate Treasury',
    defiProtocol: 'MakerDAO',
    domainCluster: 'Treasury',
    integrationPattern: 'DAO Treasury Management',
    maturity: 'Mature',
    tvl: '$7B+',
    gasEfficiency: 'Low',
    description: 'Multi-asset treasury with RWA holdings',
    detailUrl: '/domains/treasury',
  },
  {
    id: 'liquidity-management-curve',
    bianDomain: 'Liquidity Management',
    defiProtocol: 'Curve Pools',
    domainCluster: 'Treasury',
    integrationPattern: 'Liquidity Pool',
    maturity: 'Mature',
    tvl: '$4B+',
    gasEfficiency: 'High',
    description: 'Earn trading fees via LP tokens',
    detailUrl: '/domains/treasury',
  },
  {
    id: 'reserves-olympusdao',
    bianDomain: 'Reserve Management',
    defiProtocol: 'OlympusDAO',
    domainCluster: 'Treasury',
    integrationPattern: 'Protocol-Owned Liquidity',
    maturity: 'Emerging',
    tvl: '$100M+',
    gasEfficiency: 'Medium',
    description: 'Protocol owns LP tokens permanently',
    detailUrl: '/domains/treasury',
  },
  
  // Derivatives
  {
    id: 'derivatives-trading-dydx',
    bianDomain: 'Derivatives Trading',
    defiProtocol: 'dYdX',
    domainCluster: 'Derivatives',
    integrationPattern: 'Perpetual Swaps',
    maturity: 'Mature',
    tvl: '$500M+',
    gasEfficiency: 'High',
    description: 'Order book perpetuals on own chain',
    detailUrl: '/domains/derivatives',
  },
  {
    id: 'futures-gmx',
    bianDomain: 'Futures',
    defiProtocol: 'GMX',
    domainCluster: 'Derivatives',
    integrationPattern: 'LP-backed Perps',
    maturity: 'Mature',
    tvl: '$500M+',
    gasEfficiency: 'High',
    description: 'Up to 50x leverage, GLP liquidity pool',
    detailUrl: '/domains/derivatives',
  },
  {
    id: 'options-ribbon',
    bianDomain: 'Options',
    defiProtocol: 'Ribbon Finance',
    domainCluster: 'Derivatives',
    integrationPattern: 'Automated Options Vaults',
    maturity: 'Mature',
    tvl: '$50M+',
    gasEfficiency: 'Medium',
    description: 'Covered call strategies, auto-compounding yield',
    detailUrl: '/domains/derivatives',
  },
  {
    id: 'structured-products-opyn',
    bianDomain: 'Structured Products',
    defiProtocol: 'Opyn',
    domainCluster: 'Derivatives',
    integrationPattern: 'On-chain Options',
    maturity: 'Emerging',
    tvl: '$20M+',
    gasEfficiency: 'Low',
    description: 'Create/trade custom options contracts',
    detailUrl: '/domains/derivatives',
  },
  {
    id: 'synthetics-synthetix',
    bianDomain: 'Synthetic Instruments',
    defiProtocol: 'Synthetix',
    domainCluster: 'Derivatives',
    integrationPattern: 'Synthetic Assets',
    maturity: 'Mature',
    tvl: '$400M+',
    gasEfficiency: 'Medium',
    description: 'Tokenized exposure to stocks, commodities, crypto',
    detailUrl: '/domains/derivatives',
  },
  
  // Governance
  {
    id: 'corporate-governance-compound',
    bianDomain: 'Corporate Governance',
    defiProtocol: 'Compound Governance',
    domainCluster: 'Governance',
    integrationPattern: 'Token Voting',
    maturity: 'Mature',
    tvl: 'N/A',
    gasEfficiency: 'Low',
    description: 'Governor Bravo standard, on-chain execution',
    detailUrl: '/domains/governance',
  },
  {
    id: 'voting-snapshot',
    bianDomain: 'Voting Systems',
    defiProtocol: 'Snapshot',
    domainCluster: 'Governance',
    integrationPattern: 'Off-chain Voting',
    maturity: 'Mature',
    tvl: 'N/A',
    gasEfficiency: 'High',
    description: 'Gasless voting with token-weighted signatures',
    detailUrl: '/domains/governance',
  },
  {
    id: 'operations-automation',
    bianDomain: 'Business Operations',
    defiProtocol: 'Smart Contract Automation',
    domainCluster: 'Governance',
    integrationPattern: 'Automated Execution',
    maturity: 'Mature',
    tvl: 'N/A',
    gasEfficiency: 'High',
    description: 'Policy changes execute automatically on-chain',
    detailUrl: '/domains/governance',
  },
];

export default function Explorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCluster, setSelectedCluster] = useState<string>('All');
  const [selectedMaturity, setSelectedMaturity] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'bianDomain' | 'defiProtocol' | 'tvl'>('bianDomain');

  const clusters = ['All', 'Payments', 'Lending', 'Trading', 'Custody', 'Identity', 'Treasury', 'Derivatives', 'Governance'];
  const maturities = ['All', 'Mature', 'Emerging', 'Experimental'];

  const filteredMappings = useMemo(() => {
    let filtered = mappingData;

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (m) =>
          m.bianDomain.toLowerCase().includes(term) ||
          m.defiProtocol.toLowerCase().includes(term) ||
          m.integrationPattern.toLowerCase().includes(term) ||
          m.description.toLowerCase().includes(term)
      );
    }

    // Filter by cluster
    if (selectedCluster !== 'All') {
      filtered = filtered.filter((m) => m.domainCluster === selectedCluster);
    }

    // Filter by maturity
    if (selectedMaturity !== 'All') {
      filtered = filtered.filter((m) => m.maturity === selectedMaturity);
    }

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'bianDomain') return a.bianDomain.localeCompare(b.bianDomain);
      if (sortBy === 'defiProtocol') return a.defiProtocol.localeCompare(b.defiProtocol);
      return 0;
    });

    return filtered;
  }, [searchTerm, selectedCluster, selectedMaturity, sortBy]);

  const getMaturityColor = (maturity: string) => {
    if (maturity === 'Mature') return 'bg-success text-primary';
    if (maturity === 'Emerging') return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getGasColor = (gas: string) => {
    if (gas === 'High') return 'text-success';
    if (gas === 'Medium') return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/" className="text-secondary hover:text-accent transition-colors">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-primary mb-4">Integration Protocol Explorer</h1>
        <p className="text-xl text-neutral-dark mb-8">
          Interactive mapping of {mappingData.length} BIAN service domains to DeFi protocols
        </p>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg border-2 border-neutral-light mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-primary mb-2">Search</label>
              <input
                type="text"
                placeholder="Search BIAN domain, DeFi protocol, pattern..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            {/* Domain Cluster Filter */}
            <div>
              <label className="block text-sm font-bold text-primary mb-2">Domain Cluster</label>
              <select
                value={selectedCluster}
                onChange={(e) => setSelectedCluster(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                {clusters.map((cluster) => (
                  <option key={cluster} value={cluster}>
                    {cluster}
                  </option>
                ))}
              </select>
            </div>

            {/* Maturity Filter */}
            <div>
              <label className="block text-sm font-bold text-primary mb-2">Maturity</label>
              <select
                value={selectedMaturity}
                onChange={(e) => setSelectedMaturity(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                {maturities.map((maturity) => (
                  <option key={maturity} value={maturity}>
                    {maturity}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-neutral-dark">
            Showing <strong>{filteredMappings.length}</strong> of <strong>{mappingData.length}</strong> mappings
          </div>
        </div>

        {/* Mappings Table */}
        <div className="bg-white rounded-lg border-2 border-neutral-light overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-secondary text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold cursor-pointer hover:bg-primary" onClick={() => setSortBy('bianDomain')}>
                    BIAN Service Domain {sortBy === 'bianDomain' && '↕'}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold cursor-pointer hover:bg-primary" onClick={() => setSortBy('defiProtocol')}>
                    DeFi Protocol {sortBy === 'defiProtocol' && '↕'}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold">Integration Pattern</th>
                  <th className="px-4 py-3 text-left text-sm font-bold">Maturity</th>
                  <th className="px-4 py-3 text-left text-sm font-bold">TVL</th>
                  <th className="px-4 py-3 text-left text-sm font-bold">Gas</th>
                  <th className="px-4 py-3 text-left text-sm font-bold">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredMappings.map((mapping) => (
                  <tr key={mapping.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4">
                      <div className="font-bold text-primary">{mapping.bianDomain}</div>
                      <div className="text-xs text-neutral mt-1">{mapping.domainCluster}</div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-bold text-secondary">{mapping.defiProtocol}</div>
                      <div className="text-xs text-neutral-dark mt-1">{mapping.description}</div>
                    </td>
                    <td className="px-4 py-4 text-sm">{mapping.integrationPattern}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${getMaturityColor(mapping.maturity)}`}>
                        {mapping.maturity}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm font-medium">{mapping.tvl || 'N/A'}</td>
                    <td className="px-4 py-4 text-sm font-bold">
                      <span className={getGasColor(mapping.gasEfficiency)}>{mapping.gasEfficiency}</span>
                    </td>
                    <td className="px-4 py-4">
                      <Link href={mapping.detailUrl} className="text-accent hover:text-secondary font-medium text-sm">
                        View →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-neutral-light">
          <h3 className="text-lg font-bold text-primary mb-4">Legend</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-secondary mb-2">Maturity</h4>
              <ul className="space-y-1 text-sm text-neutral-dark">
                <li><span className="inline-block w-16 px-2 py-1 rounded text-xs font-bold bg-success text-primary mr-2">Mature</span> Production-ready, high TVL</li>
                <li><span className="inline-block w-16 px-2 py-1 rounded text-xs font-bold bg-yellow-100 text-yellow-800 mr-2">Emerging</span> Growing adoption, proven</li>
                <li><span className="inline-block w-16 px-2 py-1 rounded text-xs font-bold bg-gray-100 text-gray-800 mr-2">Experimental</span> Early stage, unproven</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-2">Gas Efficiency</h4>
              <ul className="space-y-1 text-sm text-neutral-dark">
                <li><span className="text-success font-bold mr-2">High</span> Low gas costs (&lt;$5)</li>
                <li><span className="text-yellow-600 font-bold mr-2">Medium</span> Moderate gas ($5-$20)</li>
                <li><span className="text-red-600 font-bold mr-2">Low</span> High gas (&gt;$20)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-2">Total Value Locked (TVL)</h4>
              <p className="text-sm text-neutral-dark">Total assets secured/managed by the protocol. Higher TVL typically indicates greater trust and liquidity.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
