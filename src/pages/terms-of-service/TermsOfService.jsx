import { useNavigate } from "react-router-dom";

const TERMS_OF_SERVICE = [
	{
		title: "Eligibility",
		description: null,
		list: [
			{
				text: "You must be at least 18 years old to use the Platform.",
			},
			{
				text: "You represent that your use complies with all applicable laws and regulations.",
			},
		],
	},
	{
		title: "Non-Custodial Platform",
		description: null,
		list: [
			{
				text: "LiquidsFi does not store, manage, or have access to your private keys or funds.",
			},
			{
				text: "All transactions are executed solely through your external wallet, and you are solely responsible for safeguarding your credentials.",
			},
		],
	},
	{
		title: "Use of the Platform",
		description: null,
		list: [
			{
				text: "You agree not to use the Platform to:",
			},
			{
				text: "Engage in unlawful, fraudulent, or abusive activity.",
			},
			{
				text: "Violate intellectual property rights.",
			},
			{
				text: "Interfere with or attempt to compromise security.",
			},
		],
	},
	{
		title: "No Financial Advice",
		description: null,
		list: [
			{
				text: "LiquidsFi does not provide investment, financial, or legal advice.",
			},
			{
				text: "All use of the Platform is at your own risk.",
			},
		],
	},
	{
		title: "Risks",
		description: null,
		list: [
			{
				text: "Interacting with blockchain networks involves inherent risks, including but not limited to smart contract vulnerabilities, network congestion, malicious attacks, and loss of digital assets.",
			},
			{
				text: "You acknowledge and accept these risks before using the Platform.",
			},
		],
	},
	{
		title: "Fees",
		description: null,
		list: [
			{
				text: "LiquidsFi may charge fees for certain transactions. Fees are disclosed prior to confirmation and may be updated at any time.",
			},
		],
	},
	{
		title: "Disclaimer of Warranties",
		description: null,
		list: [
			{
				text: "The Platform is provided “as is” and “as available.”",
			},
			{
				text: "We disclaim all warranties, express or implied, including fitness for a particular purpose, merchantability, and non-infringement.",
			},
		],
	},
	{
		title: "Limitation of Liability",
		description: null,
		list: [
			{
				text: "To the maximum extent permitted by law, LiquidsFi and its contributors shall not be liable for any indirect, incidental, or consequential damages, including but not limited to loss of funds, profits, or data.",
			},
		],
	},
	{
		title: "Indemnification",
		description: null,
		list: [
			{
				text: "You agree to indemnify and hold harmless LiquidsFi, its team, and contributors from any claims, damages, or expenses arising from your use of the Platform or violation of these Terms.",
			},
		],
	},
	{
		title: "Changes to Terms",
		description: null,
		list: [
			{
				text: "We may update these Terms periodically. Continued use of the Platform after updates constitutes acceptance of the new Terms.",
			},
		],
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
							Last updated August 1st, 2025
						</p>
					</div>

					<div className="md:text-[18px] space-y-6 text-justify">
						<p>
							These Terms of Use (“Terms”) govern your access to and use of
							LiquidsFi (“the Platform”). By using the Platform, you agree to
							these Terms.
						</p>

						<ol className="list-decimal space-y-8 pl-4">
							{TERMS_OF_SERVICE.map((section, index) => (
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
