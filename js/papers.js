// Single source of truth for all paper data.
// Update paper titles, authors, status, links, and abstracts here — changes reflect on both pages automatically.

const papers = {
    publications: [
        {
            title: "A Welfare Analysis of Policies Impacting Climate Change",
            authors: "Robert Hahn, Nathaniel Hendren, Robert Metcalfe and Ben Sprung-Keyser",
            info: "Forthcoming, <em>American Economic Review</em>",
            abstract: "We study the welfare impacts of 96 climate-related tax and spending policies. We extend and apply the marginal value of public funds (MVPF) framework, most notably providing a new method for incorporating learning-by-doing spillovers. We find subsidies for the production of clean energy (such as wind production tax credits) have higher MVPFs than all other subsidies in our sample, including EV subsidies. Conservation nudges have large MVPFs when targeting regions with dirty grids. Fuel taxes and cap-and-trade policies are highly efficient means of raising revenue. We also construct traditional cost-per-ton estimates and compare and contrast the lessons they provide.",
            links: [
                { label: "Paper",             href: "assets/MVPF_Climate_Policy_AER_Draft.pdf" },
                { label: "Appendix",          href: "assets/MVPF_Climate_Policy_AER_Appendix.pdf" },
                { label: "Executive Summary", href: "assets/MVPF_Climate_Exec_Summary.pdf" }
            ]
        },
        {
            title: "A Welfare Analysis of Tax Audits Across the Income Distribution",
            authors: "William C. Boning, Nathaniel Hendren, Ben Sprung-Keyser and Ellen Stuart",
            info: "Quarterly Journal of Economics, 140(1), 63-112, 2025.",
            abstract: "We estimate the returns to IRS audits of taxpayers across the income distribution. We find an additional $1 spent auditing taxpayers above the 90th income percentile yields more than $12 in revenue, while audits of below-median income taxpayers yield $5. We construct our estimates by drawing from comprehensive internal accounting information and audit-level enforcement logs. We begin by estimating the average initial return to all audits of U.S. taxpayers filing in tax years 2010–2014. On average, $1 in audit spending initially raises $2.17 in revenue. Audits of high-income taxpayers are more costly, but the additional revenue raised more than offsets the costs. Audits of the 99–99.9th percentile have a 3.2:1 initial return; audits of the top 0.1% return 6.3:1. We then exploit the 40% audit reduction between tax years 2010 and 2014 to examine the returns to marginal audits. We find they exceed the returns to average audits. Revenues remain relatively unchanged, but marginal costs fall below average costs due to economies of scale. Next, we use randomly selected audits to examine the effect of an initial audit on future revenue. This individual deterrence effect produces at least three times more revenue than the initial audit. Deterrence effects are relatively consistent across the income distribution. This results in the 12:1 return above the 90th percentile. We conclude by estimating the welfare consequences of audits using the MVPF framework and comparing audits to other revenue-raising policies. We find that audits raise revenue at lower welfare cost.",
            links: [
                { label: "Paper",             href: "assets/Tax_Audits_BHSKS.pdf" },
                { label: "Appendix",          href: "assets/Tax_Audits_Appendix.pdf" },
                { label: "Executive Summary", href: "assets/audits_executive_summary.pdf" }
            ]
        },
        {
            title: "A Unified Welfare Analysis of Government Policies",
            authors: "Nathaniel Hendren and Ben Sprung-Keyser",
            info: "Quarterly Journal of Economics, 135(3), 1209-1318, 2020.",
            abstract: "We conduct a comparative welfare analysis of 133 historical policy changes over the past half-century in the United States, focusing on policies in social insurance, education and job training, taxes and cash transfers, and in-kind transfers. For each policy, we use existing causal estimates to calculate the benefit that each policy provides its recipients (measured as their willingness to pay) and the policy's net cost, inclusive of long-term effects on the government's budget. We divide the willingness to pay by the net cost to the government to form each policy's Marginal Value of Public Funds, or its \"MVPF\". Comparing MVPFs across policies provides a unified method of assessing their effect on social welfare. Our results suggest that direct investments in low-income children's health and education have historically had the highest MVPFs, on average exceeding 5. Many such policies have paid for themselves as the government recouped the cost of their initial expenditures through additional taxes collected and reduced transfers. We find large MVPFs for education and health policies among children of all ages, rather than observing diminishing marginal returns throughout childhood. We find smaller MVPFs for policies targeting adults, generally between 0.5 and 2. Expenditures on adults have exceeded this MVPF range in particular if they induced large spillovers on children. We relate our estimates to existing theories of optimal government policy, and we discuss how the MVPF provides lessons for the design of future research.",
            links: [
                { label: "Paper",               href: "assets/MVPF_Mar_2020_QJE.pdf" },
                { label: "Appendix",            href: "assets/MVPF_Appendix.pdf" },
                { label: "Interactive Website", href: "https://migrationpatterns.org" }
            ]
        }
    ],

    workingPapers: [
        {
            title: "The Economic Geography of Lifecycle Human Capital Accumulation: The Competing Effects of Labor Markets and Childhood Environments",
            authors: "Ben Sprung-Keyser and Sonya Porter",
            info: "<em>Job Market Paper</em>",
            abstract: "We examine how place shapes the production of human capital across the lifecycle. We ask: do those places that most effectively produce human capital in childhood also have local labor markets that do so in adulthood? We begin by modeling wages across place as driven by 1) location-specific wage premiums, 2) adult human capital accumulation due to local labor market exposure, and 3) childhood human capital accumulation. We construct estimates of location wage premiums using AKM-style estimates of movers across US commuting zones and validate these estimates using evidence from plausibly exogenous out-migration from New Orleans in response to Hurricane Katrina. Next, we examine differential earnings trajectories among movers to construct estimates of human capital accumulation due to labor market exposure. We validate these estimates using wage changes of multi-time movers. Finally, we estimate the impact of place on childhood human capital production using age variation in moves during childhood. Crucially, our estimates of location wage premiums and adult human capital accumulation allow us to construct estimates of the causal effect of place during childhood that are not confounded by correlated labor market exposure. Using these estimates, we show there is a tradeoff between those places that most effectively produce human capital in childhood and the local labor markets that do so in adulthood. We find that each 1-rank increase in earnings due to adult labor market exposure trades off with a 0.43 rank decrease in earnings due to the local childhood environment. This pattern is closely linked to city size, as adult human capital accumulation generally increases with city size, while childhood human capital accumulation falls. These divergent trajectories are associated with differences in both the physical structure of cities and the nature of social interaction therein. There is no tradeoff present in the largest cities, which provide greater exposure to high-wage earners and higher levels of local investment. Finally, we examine how these patterns are reflected in local rents. Location wage premia are heavily capitalized into rents, but the determinants of lifecycle human capital accumulation are not.",
            links: [
                { label: "Paper", href: "assets/BSK_JMP_Linked.pdf" }
            ]
        },
        {
            title: "State Taxes, Migration, and Capital Gains Realizations",
            authors: "Lucas Goodman and Ben Sprung-Keyser",
            info: "Revision Requested, <em>AEJ:Policy</em>",
            abstract: "We analyze the impact of state capital gains taxes on migration and realization. We find the probability of migrating to a zero-tax state before realization rises with potential tax savings. Exploiting individual-level variation in tax savings, we use a dynamic discrete choice model to quantify the behavioral effects of state capital gains taxes. Savings in zero-tax states drive $2 billion in annual realizations by former residents of positive-tax states. Reducing top rates would decrease avoidance by out-migrants, but the fiscal externalities are below 3% of the mechanical cost. These effects are driven by changing migration rather than retiming existing moves.",
            links: [
                { label: "Paper",    href: "assets/GSK_Capital_Gains_Resubmission%20(2).pdf" },
                { label: "Appendix", href: "assets/Appendix_GSK_Capital_Gains_Resubmission.pdf" }
            ]
        },
        {
            title: "The Radius of Economic Opportunity: Evidence from Migration and Local Labor Markets",
            authors: "Ben Sprung-Keyser, Nathaniel Hendren, and Sonya Porter",
            info: "<em>Center for Economic Studies Working Paper Series, US Census Bureau, CES-22-27</em>",
            abstract: "We examine the geographic incidence of local labor market growth across locations of childhood residence. We ask: when wages grow in a given US labor market, do the benefits flow to individuals growing up in nearby or distant locations? We begin by constructing new statistics on migration rates across labor markets between childhood and young adulthood. This migration matrix shows 80% of young adults migrate less than 100 miles from where they grew up. 90% migrate less than 500 miles. Migration distances are shorter for Black and Hispanic individuals and for those from low-income families. These migration patterns provide information on the first order geographic incidence of local wage growth. Next, we explore the responsiveness of location choices to economic shocks. Using geographic variation induced by the recovery from the Great Recession, we estimate the elasticity of migration with respect to increases in local labor market wage growth. We find that higher wages lead to increased in-migration, decreased out-migration and a partial capitalization of wage increases into local prices. Our results imply that for a 2 rank point increase in annual wages (approximately $1,600) in a given commuting zone, approximately 99% of wage gains flow to those who would have resided in the CZ in the absence of the wage change. The geographically concentrated nature of most migration and the small magnitude of these migration elasticities suggest that the incidence of labor market conditions across childhood residences is highly local. For many individuals, the \"radius of economic opportunity\" is quite narrow.",
            links: [
                { label: "Paper", href: "assets/Migration_vSI.pdf" }
            ]
        }
    ],

    notes: [
        {
            title: "The Case for Using the MVPF in Empirical Welfare Analysis",
            authors: "Nathaniel Hendren and Ben Sprung-Keyser",
            info: "<em>NBER Working Paper, No. 30029</em>",
            abstract: "This paper outlines the case for using the Marginal Value of Public Funds (MVPF) in empirical welfare analysis. It compares the MVPF approach with more traditional welfare metrics such as the Cost-Benefit Ratio and the Net Social Benefits criterion. It outlines the advantages of the MVPF approach relative to these metrics. In building the case for the MVPF, this paper also addresses several misconceptions about the MVPF that appear in recent literature.",
            links: [
                { label: "Paper", href: "assets/MVPF_Case_vFinal.pdf" }
            ]
        }
    ]
};

function renderPapers(containerId, paperList) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = paperList.map(p => {
        const linksHtml = p.links.map(l =>
            `<a href="${l.href}" target="_blank">${l.label}</a>`
        ).join(' ');

        const abstractHtml = p.abstract
            ? `<details class="abstract-details">
                <summary>Abstract</summary>
                <p class="abstract-text">${p.abstract}</p>
               </details>`
            : '';

        return `
            <div class="paper">
                <p class="paper-title">${p.title}</p>
                <p class="paper-authors">${p.authors}</p>
                <p class="paper-info">${p.info}</p>
                <p class="paper-links">${linksHtml}</p>
                ${abstractHtml}
            </div>`;
    }).join('');
}
