import { useNavigate } from "react-router-dom";

const PRIVACY_POLICY = [
	{
		title: "Non-Custodial Design",
		description: null,
		list: [
			{
				text: "LiquidsFi is a non-custodial protocol. Users connect through external wallets to access our services.",
			},
			{
				text: "We do not request, store, or gain access to your private keys, seed phrases, or other sensitive wallet credentials.",
			},
		],
	},
	{
		title: "Information We Do Not Collect",
		description: null,
		list: [
			{
				text: "We do not collect or store personally identifiable information (PII) such as names, emails, addresses, or phone numbers when you use the Platform.",
			},
			{
				text: "We do not have access to or custody of user funds.",
			},
		],
	},
	{
		title: "Information We May Collect",
		description: null,
		list: [
			{
				term: "Blockchain Data",
				description:
					"Interactions with the Platform may be publicly recorded on supported blockchains. This includes wallet addresses, transaction history, and asset balances viewable on-chain.",
			},
			{
				term: "Technical Data",
				description:
					"We may collect limited technical data (e.g., IP address, device type, browser information) through analytics tools to improve platform performance and security.",
			},
			{
				term: "Cookies",
				description:
					"We may use cookies or similar technologies for website functionality and analytics.",
			},
		],
	},
	{
		title: "How We Use Data",
		description: null,
		list: [
			{ text: "To operate and improve the Platform." },
			{
				text: "To provide security, prevent misuse, and protect against fraud.",
			},
			{ text: "To analyze usage patterns for protocol improvements." },
		],
	},
	{
		title: "How We Share Data",
		description: null,
		list: [
			{
				text: "We do not sell, rent, or trade user data.",
			},
			{
				text: "Limited aggregated or anonymized data may be shared for analytics, research, or ecosystem reporting.",
			},
			{
				text: "If required by law, we may share information to comply with legal obligations.",
			},
		],
	},
	{
		title: "Third-Party Services",
		description: null,
		list: [
			{
				text: "Wallet providers (e.g., MetaMask, Freighter, etc.) are independent services. Their use is governed by their own terms and privacy policies.",
			},
			{
				text: "We are not responsible for how third-party services handle your data.",
			},
		],
	},
	{
		title: "Security",
		description: null,
		list: [
			{
				text: "LiquidsFi implements reasonable safeguards, but blockchain interactions are inherently transparent and irreversible.",
			},
			{
				text: "Users are solely responsible for protecting their wallet credentials.",
			},
		],
	},
	{
		title: "Your Rights",
		description: null,
		list: [
			{
				text: "Depending on your jurisdiction, you may have rights to request access, correction, or deletion of certain data we collect. Please contact us at info@liquids.fi for such requests.",
			},
		],
	},
	{
		title: "International Use",
		description: null,
		list: [
			{
				text: "By accessing LiquidsFi, you understand that your data may be processed in jurisdictions with different data protection standards than your own.",
			},
		],
	},
	{
		title: "Updates to Privacy Policy",
		description: null,
		list: [
			{
				text: "We may update this Privacy Policy periodically. Changes will be posted with an updated effective date.",
			},
		],
	},
];

function PrivacyPolicy() {
	const navigate = useNavigate();
	return (
		<div className="min-h-screen bg-black text-gray-100">
			<section className="py-12 sm:py-16 lg:py-24">
				<div className="container px-4 mx-auto sm:px-6 lg:px-8">
					<button
						onClick={() => navigate(-1)}
						className="flex cursor-pointer items-center gap-2 mb-6"
					>
						<img src="/CaretCircleLeft.svg" alt="" />
						<span className="text-[18px] text-[#4B5563] font-normal">Back</span>
					</button>

					<div className="mb-[24px] md:mb-[43px]">
						<h2 className="text-[24px] font-bold md:text-[40px]">
							Privacy Policy
						</h2>
						<p className="font-light md:text-[24px] text-[18px]">
							Last updated August 1st, 2025
						</p>
					</div>

					<div className="md:text-[18px] space-y-6 text-justify">
						<p>
							LiquidsFi (“we,” “our,” “us”) values your privacy. This Privacy
							Policy explains how we handle user information when you access or
							use our website, applications, or services (collectively, the
							“Platform”).
						</p>

						<ol className="list-decimal space-y-8 pl-4">
							{PRIVACY_POLICY.map((section, index) => (
								<li key={index}>
									<h3 className="font-semibold mb-2 text-[20px] md:text-[24px]">
										{section.title}
									</h3>

									{section.description && (
										<p className="mb-4">{section.description}</p>
									)}

									{section.list && section.list.length > 0 && (
										<ul className="list-disc space-y-3 pl-10">
											{section.list.map((item, idx) => (
												<li key={idx}>
													{item.term && item.description ? (
														<div className="flex gap-1 flex-wrap">
															<span className="font-semibold shrink-0">
																{item.term}:
															</span>
															<span>{item.description}</span>
														</div>
													) : (
														<span>{item.text}</span>
													)}
												</li>
											))}
										</ul>
									)}

									{section.footer && <p className="mt-4">{section.footer}</p>}
								</li>
							))}
						</ol>
					</div>
				</div>
			</section>
		</div>
	);
}

export default PrivacyPolicy;
