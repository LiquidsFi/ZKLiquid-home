import { useNavigate } from "react-router-dom";

const PRIVACY_POLICY = [
	{
		title: "Information We Collect",
		description:
			"We may collect the following information when you use SocketFi:",
		list: [
			{
				term: "Account Data",
				description:
					"Public wallet addresses, Soroban smart wallet identifiers.",
			},
			{
				term: "Authentication Data",
				description:
					"Passkey credentials stored on your device for local authentication.",
			},
			{
				term: "Transaction Data",
				description:
					"Details of transactions you approve through SocketFi (transaction hash, contract ID, signatures).",
			},
			{
				term: "Optional Data",
				description:
					"Linked social accounts (email, Twitter, Telegram, Discord). These bindings are completely optional and used only if you choose to enable them.",
			},
			{
				term: "KYC Data",
				description:
					"Required only if you request account recovery or if regulations require it.",
			},
		],
		footer:
			"We do not collect or store your private keys. Private keys remain encrypted within independent, isolated signer nodes or securely stored on your device.",
	},
	{
		title: "How We Use Your Information",
		description: null,
		list: [
			{
				text: "To provide access to dApps within the Soroban and Stellar ecosystem.",
			},
			{
				text: "To authenticate and authorize transactions through BLS-12 on-chain verification.",
			},
			{
				text: "To enable optional social profile binding and humanized sharing links.",
			},
			{
				text: "To support social-based recovery requests (with KYC requirements).",
			},
			{ text: "To maintain platform security and prevent fraud." },
		],
		footer: null,
	},
	{
		title: "Data Sharing",
		description: null,
		list: [
			{
				text: "We do not sell or share your personal information with third parties.",
			},
			{
				text: "Linked social accounts are used strictly for optional account binding and recovery purposes.",
			},
			{
				text: "Data may only be disclosed if required by law, regulation, or court order.",
			},
		],
		footer: null,
	},
	{
		title: "Security",
		description: null,
		list: [
			{ text: "All transactions require passkey-based approval." },
			{ text: "Private keys are encrypted and isolated across signer nodes." },
			{
				text: "Aggregated BLS signatures are generated only after successful multi-node authentication.",
			},
			{
				text: "We enforce strict verification (including KYC when applicable) before recovery or binding requests are approved.",
			},
		],
		footer: null,
	},
	{
		title: "Your Rights",
		description: null,
		list: [
			{
				term: "Access & Update",
				description:
					"You may access and update your account and optional social bindings at any time.",
			},
			{
				term: "Unlinking",
				description:
					"You may unlink social accounts at any time with no impact on wallet functionality.",
			},
			{
				term: "Data Deletion",
				description:
					"You may request deletion of account-binding data by contacting support.",
			},
		],
		footer: null,
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
							Last updated September 12, 2025
						</p>
					</div>

					<div className="md:text-[18px] space-y-6 text-justify">
						<p>
							SocketFi (“we,” “our,” or “us”) is committed to protecting your
							privacy. This Privacy Policy explains how we collect, use, and
							safeguard your information when you use our smart wallet and
							decentralized access platform (“SocketFi App”).
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
