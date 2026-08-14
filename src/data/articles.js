import React from "react";

function article_1() {
	return {
		date: "12 Oct 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud — and how teams can make the shift without losing sleep.",
		category: "Cloud Architecture",
		readTime: "6 min read",
		image: "https://picsum.photos/seed/cloud/1200/800",
		featured: true,
		keywords: [
			"The Benefits of Cloud Computing",
			"Kavinda",
			"Kavinda Gimhan",
			"Kavinda Dharmasiri",
		],
		style: ``,
		body: (
			<React.Fragment>
				<p>
					If you've been building software for more than a few years,
					you've probably noticed a quiet shift: fewer companies are
					asking about server racks, and more are asking about
					regions, zones, and egress costs. Cloud computing has moved
					from a buzzword to the default way modern systems are built.
					But beyond the hype, what does the cloud actually buy you?
				</p>

				<p>
					I've spent most of my career working on enterprise and
					government applications with a stack of Angular on the front
					end and Spring Boot behind an API. Those systems used to run
					on fixed hardware with predictable traffic. Moving them to
					the cloud changed how we think about capacity planning,
					failure, and even how we price a feature. Here's what I
					learned about the real, practical benefits.
				</p>

				<h2>1. Cost efficiency: pay for what you use</h2>

				<p>
					Traditional infrastructure means buying for your peak. A
					reporting service that only gets hammered at month-end still
					required servers sized for that spike — servers that sat
					idle the rest of the time. The cloud inverts this model with
					pay-as-you-go pricing. You spin resources up when you need
					them and tear them down when you don't.
				</p>

				<p>For most teams this translates into:</p>

				<ul>
					<li>
						Lower capital expenditure — no hardware procurement
						cycles.
					</li>
					<li>
						Better unit economics — you pay by the hour, not by the
						rack.
					</li>
					<li>
						Reserved instances or savings plans for predictable
						workloads that cut costs further.
					</li>
				</ul>

				<h2>2. Elasticity and scale on demand</h2>

				<p>
					The cloud's real superpower is elasticity. With
					auto-scaling groups, a Spring Boot service can grow from
					two instances to twenty in a few minutes when a burst of
					traffic arrives, then shrink back down afterward. No pager
					duty call at 3 a.m. to provision a new server — the
					infrastructure responds to load automatically.
				</p>

				<p>
					This matters more than most engineers realize. SLOs are
					measured in availability and latency, and the difference
					between "the system held up" and "the system held up
					easily" is often just the ability to scale horizontally
					behind a load balancer.
				</p>

				<h2>3. Reliability and high availability built in</h2>

				<p>
					Availability zones and multi-region deployment give you
					fault tolerance that would be prohibitively expensive to
					build yourself. Databases replicate synchronously within a
					region; backups are automated; managed services come with
					SLAs. If a data center fails, traffic shifts to another one
					— and your users notice nothing.
				</p>

				<p>
					Designing for the cloud forces a useful discipline: assume
					everything fails eventually, and build so that a failure is
					a small, contained event rather than an outage.
				</p>

				<h2>4. Security and the shared responsibility model</h2>

				<p>
					Security in the cloud is a partnership. The provider
					secures the physical data centers, the network, and the
					hypervisor. You secure your applications, your data, and
					your access controls. For government and enterprise work,
					this is a huge advantage — you inherit compliance
					certifications (like SOC 2 and ISO 27001) that would take
					months to obtain on your own.
				</p>

				<p>
					That doesn't mean the cloud is automatically safe. IAM
					roles, encryption in transit and at rest, and least
					privilege are still your responsibility. But the tools to
					do it well are right there, and they're better than what
					most organizations had on-premises.
				</p>

				<h2>5. Faster delivery and experimentation</h2>

				<p>
					Because infrastructure is code, you can spin up an
					environment in minutes instead of weeks. That changes team
					behavior. Staging environments become cheap enough to throw
					away after each feature. Experiments — "what if we cache
					here?", "what if this service were serverless?" — can be
					tested with real traffic and measured properly.
				</p>

				<p>
					For teams on Angular and Spring Boot, a typical pattern is a
					single-tenant build that gets containerized, pushed to a
					registry, and deployed through a pipeline. Every commit
					becomes a deployable artifact. That speed is the foundation
					of modern CI/CD.
				</p>

				<h2>6. Managed services you don't have to operate</h2>

				<p>
					The biggest hidden win of the cloud is the stuff you stop
					doing. Managed databases handle patches and backups.
					Message queues handle durability. Object storage gives you
					near-infinite, cheap persistence. Every managed service you
					adopt is one fewer thing your team has to run at 2 a.m.
				</p>

				<p>
					The tradeoff is lock-in, so it's worth picking services that
					follow open standards (SQL, S3-compatible object storage,
					standard message protocols) wherever you can. The provider
					can change; your architecture shouldn't have to.
				</p>

				<h2>Making the shift without breaking things</h2>

				<p>
					If you're migrating an existing system, don't do a big-bang
					rewrite. Start with the easiest wins: lift and shift the
					database to a managed service, put the application behind a
					load balancer, enable auto-scaling, and add backups. Measure
					cost, reliability, and deployment time before and after.
					Then iterate.
				</p>

				<p>
					The cloud isn't magic, and it isn't automatically cheaper —
					an unmonitored bill can surprise you. But used deliberately,
					it gives you something no data center ever could: the
					ability to move fast, scale on demand, and sleep through the
					night. That's a benefit worth moving for.
				</p>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "28 Sep 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		category: "AI & ML",
		readTime: "4 min read",
		image: "https://picsum.photos/seed/ai/1200/800",
		featured: false,
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Kavinda",
			"Kavinda Gimhan",
			"Kavinda Dharmasiri",
		],
		body: (
			<React.Fragment>
				<p>
					Healthcare generates more data per patient than almost any
					other industry — lab results, imaging studies, vital signs,
					genomic profiles, and decades of clinical notes. For years
					that data sat in silos, read by humans, summarized slowly,
					and often under-used. Artificial intelligence is changing
					that. Here's where the technology is actually working today.
				</p>

				<h2>Faster, sharper medical imaging</h2>

				<p>
					Radiology was one of the first fields to feel the impact.
					Computer vision models can now flag suspicious lesions on
					X-rays, CT scans, and mammograms with accuracy comparable to
					a specialist — and they do it in seconds. The goal isn't to
					replace the radiologist; it's to triage. Models read the
					urgent scans first, and the radiologist reviews the model's
					suggestions, catching things that a tired eye might miss.
				</p>

				<h2>Predicting outcomes before they happen</h2>

				<p>
					Predictive models trained on electronic health records can
					identify patients at risk of deterioration, readmission, or
					complications before symptoms become obvious. A hospital
					can see that a patient's vitals are trending in a dangerous
					direction and intervene early — which is exactly when
					intervention works best.
				</p>

				<ul>
					<li>
						Sepsis alerts that fire hours earlier than manual review.
					</li>
					<li>
						Readmission risk scores that guide discharge planning.
					</li>
					<li>
						Population health models that spot at-risk groups in a
						region.
					</li>
				</ul>

				<h2>Taking the administrative load off clinicians</h2>

				<p>
					Clinicians spend a shocking amount of time on paperwork —
					often more than half their day. Natural language processing
					is starting to write the notes. Ambient AI listens to a
					doctor-patient conversation and drafts the clinical note,
					structured for the electronic health record. Scheduling,
					prioritization, and insurance pre-authorization are all
					being automated, giving the human time back to the humans.
				</p>

				<h2>Accelerating drug discovery</h2>

				<p>
					The traditional path from molecule to medicine takes a
					decade or more. Machine learning models can predict how
					compounds will behave, screen millions of candidates in
					silico, and propose molecules optimized for specific
					targets. The COVID-19 vaccines are the most visible example,
					but the same techniques are now routine across the industry,
					shrinking discovery timelines from years to months.
				</p>

				<h2>The hard problems: privacy, bias, and trust</h2>

				<p>
					None of this is easy. Health data is the most sensitive data
					there is, so privacy and governance are non-negotiable.
					Models trained on biased datasets can produce biased
					recommendations, so datasets must be representative and
					audited continuously. And because a model's mistake can
					directly harm a patient, every prediction needs a human in
					the loop and a clear explanation of how it was reached.
				</p>

				<h2>What comes next</h2>

				<p>
					The pattern across all of these applications is the same:
					AI isn't replacing healthcare — it's removing the
					grunt-work, surfacing the signal in mountains of data, and
					giving skilled professionals more time to do the part that
					only humans can do. For engineers, that means healthcare is
					one of the most meaningful places to build. The systems you
					write might not just run faster; they might keep someone
					healthy.
				</p>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "15 Nov 2023",
		title: "Software Engineering for Orbital Mechanics",
		description:
			"How precision programming ensures satellite stability in low earth orbit, and the unique challenges of space-bound code.",
		category: "Space Exploration",
		readTime: "7 min read",
		image: "https://picsum.photos/seed/orbit/1200/800",
		featured: false,
		style: ``,
		keywords: [
			"Software Engineering for Orbital Mechanics",
			"Kavinda",
			"Kavinda Gimhan",
			"Kavinda Dharmasiri",
		],
		body: (
			<React.Fragment>
				<p>
					There's a moment every space software engineer remembers:
					the first time you watch a satellite you helped write
					software for cross the sky. It looks like nothing special —
					a steady point of light — but behind that point are tens of
					thousands of lines of code, computing positions, torquing
					reaction wheels, and keeping a fragile spacecraft pointed
					exactly where it needs to be.
				</p>

				<p>
					Orbital mechanics is the physics of that point of light. And
					writing software for it is unlike almost anything else in
					our field. Here's a tour of what makes it special.
				</p>

				<h2>Orbits are just falling, forever</h2>

				<p>
					An orbit isn't a mystical thing — it's a freefall that
					misses the planet. A satellite in low earth orbit (LEO)
					travels about 7.8 kilometers per second, fast enough that
					as it falls toward Earth, the planet's curvature drops away
					at the same rate. The math that describes this is the
					two-body problem, solved by Kepler's laws, and it's
					beautifully deterministic:
				</p>

				<pre>
					<code>{`r = a * (1 - e * cos(E))

mean_motion = sqrt(mu / a^3)
E - e * sin(E) = M`}</code>
				</pre>

				<p>
					Given an epoch and the orbital elements — semi-major axis,
					eccentricity, inclination, and the angles that orient the
					orbit — you can predict where a satellite will be at any
					future time. On the ground, that's what the tracking
					software does: propagate the orbit forward and tell the
					antenna where to point.
				</p>

				<h2>Precision is not optional</h2>

				<p>
					Errors compound fast in space. An antenna beamwidth might be
					fractions of a degree. A one-arcsecond pointing error at
					500 kilometers becomes a cross-track error of over two
					meters. Worse, orbit propagation is a giant integration
					loop: every small error in velocity estimation becomes a
					position error that grows with time squared.
				</p>

				<p>Space software deals with this by:</p>

				<ul>
					<li>
						Using high-precision ephemerides (like the JPL
						development ephemerides) for planets and the Moon.
					</li>
					<li>
						Modeling drag, solar radiation pressure, and the
						oblateness of the Earth (J2 perturbations).
					</li>
					<li>
						Propagating state vectors with numerical integrators
						and validating against actual tracking measurements.
					</li>
				</ul>

				<h2>You can't patch what you can't reach</h2>

				<p>
					The hardest constraint is operational. A satellite in LEO
					passes a ground station for maybe ten minutes, a few times
					a day. Between passes, the spacecraft is on its own. If
					software wedges in a spin while no one is watching, it can
					drift out of attitude, drain its batteries pointing away
					from the Sun, or fail to fire a burn at the right time.
				</p>

				<p>So space-grade software is built like a fortress:</p>

				<ul>
					<li>
						Radiation-hardened processors with error-correcting
						memory to survive single-event upsets.
					</li>
					<li>
						Watchdog timers that reset a hung task automatically.
					</li>
					<li>
						Fault management — a pre-planned response for every
						reasonably likely failure.
					</li>
					<li>
						Autonomous safe-mode: if all else fails, detumble the
						spacecraft, point solar panels at the Sun, and wait for
						the ground to take over.
					</li>
				</ul>

				<h2>Verification before launch is everything</h2>

				<p>
					Because you can't iterate after liftoff, verification is
					obsessive. Guidance, navigation, and control (GNC) software
					spends years in simulation. Model-in-the-loop tests validate
					the physics. Software-in-the-loop tests validate the code.
					Hardware-in-the-loop tests connect the real flight computer
					to simulated sensors and actuators. And Monte Carlo runs
					throw thousands of random initial conditions at the system
					to prove it can recover from anywhere.
				</p>

				<p>
					This discipline — prove it before it flies — is something
					we could all borrow for earth-bound systems. Most outages
					in terrestrial software trace back to a scenario nobody
					simulated.
				</p>

				<h2>What space code teaches us</h2>

				<p>
					Building software for space sharpens instincts that apply
					everywhere: assume partial failure and design for it, keep
					state minimal and recoverable, test against the worst case,
					and never trust an integration that wasn't exercised
					end-to-end. The stack may be different — a flight computer
					rather than a Spring Boot service — but the engineering
					values are the same.
				</p>

				<p>
					The next time you watch a satellite cross the sky, remember
					the code behind it. Every orbit is a promise that somebody
					got the math right — and the software right with it.
				</p>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;
