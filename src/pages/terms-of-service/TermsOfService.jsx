import { useNavigate } from "react-router-dom";

const TERMS_OF_CONDITIONS = [
	{
		title: "Acceptance of Terms",
		description:
			"By creating an account or using SocketFi, you agree to these Terms, our Privacy Policy, and all applicable laws.",
		list: [],
		footer: null,
	},
	{
		title: "Services Provided",
		description: null,
		list: [
			{
				text: "SocketFi provides Soroban-based smart wallets with on-chain authentication using BLS-12 signatures.",
			},
			{
				text: "Users may access decentralized applications (dApps) within the Soroban and Stellar ecosystem.",
			},
			{
				text: "Social profile binding (email, Twitter, Telegram, Discord) is entirely optional and not required for wallet functionality.",
			},
		],
		footer: null,
	},
	{
		title: "Wallet Security",
		description: null,
		list: [
			{
				text: "Private keys are encrypted and stored only in independent signer nodes or your local device.",
			},
			{ text: "SocketFi does not have direct access to user private keys." },
			{
				text: "You are responsible for securing your device and passkey credentials.",
			},
		],
		footer: null,
	},
	{
		title: "Transaction Authorization",
		description: null,
		list: [
			{ text: "All transactions require explicit user approval via passkey." },
			{
				text: "SocketFi servers coordinate with signer nodes to aggregate BLS signatures for on-chain verification.",
			},
			{ text: "Once submitted, transactions are irreversible and final." },
		],
		footer: null,
	},
	{
		title: "Social Account Binding & Recovery",
		description: null,
		list: [
			{
				text: "Binding social accounts is optional and only provides added convenience (humanized links, recovery options).",
			},
			{
				text: "Recovery requests may require additional verification, including KYC checks.",
			},
			{
				text: "SocketFi reserves the right to reject recovery requests that do not pass verification.",
			},
		],
		footer: null,
	},
	{
		title: "User Responsibilities",
		description: null,
		list: [
			{
				text: "You agree not to use SocketFi for illegal or fraudulent purposes.",
			},
			{
				text: "You are responsible for all activity under your account and wallet.",
			},
			{
				text: "You must comply with applicable laws in your jurisdiction regarding digital assets and decentralized applications.",
			},
		],
		footer: null,
	},
];

function TermsOfService() {
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
							Terms of Service
						</h2>
						<p className="font-light md:text-[24px] text-[18px]">
							Last updated September 12, 2025
						</p>
					</div>

					<div className="md:text-[18px] space-y-6 text-justify">
						<p>
							Welcome to SocketFi! By accessing or using our smart wallet and
							platform, you agree to the following Terms & Conditions. Please
							read them carefully.
						</p>

						<ol className="list-decimal space-y-8 pl-4">
							{TERMS_OF_CONDITIONS.map((section, index) => (
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

export default TermsOfService;
