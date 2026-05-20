<script>
	import Animate from "../../components/Animate.svelte";
</script>

<div class="container">
	<!-- HERO SECTION -->
	<Animate type="slideDown">
		<section class="hero">
			<div class="hero-content">
				<h1>Nexus Launchpad</h1>
				<p class="hero-subtitle">
					Piattaforma AI-Human per Standardizzare Startup Data
				</p>
				<p class="hero-description">
					Genera documentazione investment-ready per acceleratori e startup program
				</p>
				<!-- <div class="cta-buttons">
					<button
						class="btn btn-primary"
						onclick={() =>
							document
								.getElementById("details")
								.scrollIntoView({ behavior: "smooth" })}
					>
						Scopri di Più
					</button>
					<a
						href="https://nexus.rizzolo.cloud"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-secondary"
					>
						Accedi alla Piattaforma
					</a>
				</div> -->
			</div>
		</section>
	</Animate>

	<!-- DETAILS SECTION -->
	<Animate type="slideUp">
		<section class="details" id="details">
			<div class="section-container">
				<h2>Come Funziona</h2>

				<div class="features-grid">
					<Animate type="slideUp" duration={0.7} delay={100}>
						<div class="feature-card">
							<div class="feature-icon">📊</div>
							<h3>Standardizzazione Dati</h3>
							<p>
								Nexus standardizza i dati startup in un formato
								coerente e strutturato, eliminando inconsistenze
								e garantendo dati di qualità.
							</p>
						</div>
					</Animate>

					<Animate type="slideUp" duration={0.7} delay={200}>
						<div class="feature-card">
							<div class="feature-icon">🤖</div>
							<h3>AI-Human Interaction</h3>
							<p>
								Un sistema AI rule-based affinato con interazione
								umana per garantire risultati accurati e
								personalizzati.
							</p>
						</div>
					</Animate>

					<Animate type="slideUp" duration={0.7} delay={300}>
						<div class="feature-card">
							<div class="feature-icon">📄</div>
							<h3>Documentazione Investment-Ready</h3>
							<p>
								Genera automaticamente documentazione
								professionale pronta per presentazioni agli
								investitori.
							</p>
						</div>
					</Animate>
				</div>

				<div class="about-nexus">
					<h2>Cos'è Nexus Launchpad?</h2>
					<p>
						Nexus Launchpad è un'infrastruttura AI progettata
						specificamente per acceleratori e startup program.
						Combina tecnologia di intelligenza artificiale con
						supervisione umana per standardizzare e ottimizzare i
						dati startup.
					</p>

					<div class="benefits-list">
						<h3>Vantaggi Principali:</h3>
						<ul>
							<li>✓ Riduce il tempo di preparazione della documentazione</li>
							<li>✓ Standardizza il formato dei dati startup</li>
							<li>✓ Migliora la qualità della documentazione</li>
							<li>✓ Facilita la valutazione degli investitori</li>
							<li>✓ Aumenta le opportunità di finanziamento</li>
						</ul>
					</div>
				</div>

				<div class="target-audience">
					<h2>Per Chi è Nexus Launchpad?</h2>
					<p>
						Nexus Launchpad è ideale per:
					</p>
					<div class="audience-grid">
						<div class="audience-card">
							<div class="audience-icon">🚀</div>
							<h4>Startup Founders</h4>
							<p>
								Prepara rapidamente documentazione
								professionale e investment-ready.
							</p>
						</div>
						<div class="audience-card">
							<div class="audience-icon">🏢</div>
							<h4>Acceleratori</h4>
							<p>
								Standardizza i dati delle tue startup portfolio
								e semplifica le valutazioni.
							</p>
						</div>
						<!-- <div class="audience-card">
							<div class="audience-icon">💼</div>
							<h4>Investitori</h4>
							<p>
								Accedi a dati strutturati e documentazione
								uniforme per migliori analisi.
							</p>
						</div> -->
					</div>
				</div>

				<div class="cta-section">
					<h2>Pronto a Iniziare?</h2>
					<p>
						Trasforma i tuoi dati startup in documentazione
						investment-ready.
					</p>
					<a
						href="/#contact"
						class="btn btn-primary"
					>
						Contattaci
					</a>
				</div>
			</div>
		</section>
	</Animate>

	<!-- FOOTER -->
	<footer class="footer">
		<p>Nexus Launchpad</p>
		<p class="footer-links">
			<a href="/" style="margin-right: 20px;">← Torna alla Home</a>
			<a href="https://rizzolo.cloud" target="_blank" rel="noopener noreferrer">RizzoloCloud</a>
		</p>
	</footer>
</div>

<style>
	.container {
		width: 100%;
		min-height: 100vh;
		background-color: #ffffff;
	}

	/* HERO SECTION */
	.hero {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 40px 20px;
		background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
	}

	.hero-content {
		text-align: center;
		max-width: 800px;
	}

	h1 {
		font-size: 3.5rem;
		font-weight: 700;
		color: #222;
		margin: 20px 0;
		letter-spacing: -1px;
		font-family: 'Playfair Display', serif;
	}

	.hero-subtitle {
		font-size: 1.8rem;
		color: #e74c3c;
		font-weight: 600;
		margin: 15px 0;
	}

	.hero-description {
		font-size: 1.2rem;
		color: #666;
		margin: 20px 0 40px 0;
		line-height: 1.6;
	}

	.cta-buttons {
		display: flex;
		gap: 20px;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 40px;
	}

	/* BUTTONS */
	.btn {
		padding: 14px 32px;
		border: 2px solid #e74c3c;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		background: transparent;
		position: relative;
		overflow: hidden;
		display: inline-block;
		text-decoration: none;
	}

	.btn-primary {
		background-color: #e74c3c;
		color: white;
		box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
	}

	.btn-primary:hover {
		background-color: #c0392b;
		box-shadow: 0 8px 25px rgba(231, 76, 60, 0.4);
		transform: translateY(-2px);
	}

	.btn-secondary {
		background-color: transparent;
		color: #e74c3c;
	}

	.btn-secondary:hover {
		background-color: #e74c3c;
		color: white;
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(231, 76, 60, 0.2);
	}

	/* SECTIONS */
	.section-container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 20px;
	}

	section {
		padding: 80px 20px;
	}

	section h2 {
		font-size: 2.5rem;
		color: #222;
		margin-bottom: 40px;
		text-align: center;
		position: relative;
		padding-bottom: 20px;
	}

	section h2::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 60px;
		height: 4px;
		background-color: #e74c3c;
		border-radius: 2px;
	}

	/* DETAILS SECTION */
	.details {
		background-color: #ffffff;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 30px;
		margin-bottom: 60px;
	}

	.feature-card {
		padding: 30px;
		background: #fafafa;
		border-radius: 12px;
		border-left: 4px solid #e74c3c;
		transition: all 0.3s ease;
	}

	.feature-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(231, 76, 60, 0.15);
	}

	.feature-icon {
		font-size: 2.5rem;
		margin-bottom: 15px;
	}

	.feature-card h3 {
		font-size: 1.3rem;
		color: #222;
		margin-bottom: 15px;
	}

	.feature-card p {
		color: #666;
		line-height: 1.8;
	}

	.about-nexus {
		background: #f5f5f5;
		padding: 40px;
		border-radius: 12px;
		margin-bottom: 40px;
	}

	.about-nexus h2 {
		margin-bottom: 20px;
	}

	.about-nexus p {
		font-size: 1.1rem;
		color: #555;
		margin-bottom: 30px;
		line-height: 1.8;
	}

	.benefits-list h3 {
		color: #e74c3c;
		margin-bottom: 20px;
		font-size: 1.3rem;
	}

	.benefits-list ul {
		list-style: none;
		display: grid;
		grid-template-columns: 1fr;
		gap: 12px;
	}

	.benefits-list li {
		font-size: 1.05rem;
		color: #555;
		padding-left: 0;
	}

	.target-audience {
		margin-top: 60px;
	}

	.target-audience h2 {
		margin-bottom: 20px;
	}

	.target-audience > p {
		text-align: center;
		font-size: 1.1rem;
		color: #666;
		margin-bottom: 40px;
	}

	.audience-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 25px;
		margin-bottom: 40px;
	}

	.audience-card {
		background: white;
		padding: 30px;
		border-radius: 12px;
		border: 2px solid #f0f0f0;
		text-align: center;
		transition: all 0.3s ease;
	}

	.audience-card:hover {
		border-color: #e74c3c;
		transform: translateY(-8px);
	}

	.audience-icon {
		font-size: 2.5rem;
		margin-bottom: 15px;
	}

	.audience-card h4 {
		color: #222;
		margin-bottom: 15px;
		font-size: 1.2rem;
	}

	.audience-card p {
		color: #666;
		font-size: 1rem;
	}

	.cta-section {
		background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
		padding: 50px 40px;
		border-radius: 12px;
		text-align: center;
		color: white;
		margin-top: 60px;
	}

	.cta-section h2 {
		color: white;
		margin-bottom: 20px;
	}

	.cta-section h2::after {
		background-color: white;
	}

	.cta-section p {
		color: rgba(255, 255, 255, 0.9);
		font-size: 1.1rem;
		margin-bottom: 30px;
	}

	.cta-section .btn-primary {
		background-color: white;
		color: #e74c3c;
		border-color: white;
	}

	.cta-section .btn-primary:hover {
		background-color: #f0f0f0;
	}

	/* FOOTER */
	.footer {
		background-color: #222;
		color: white;
		text-align: center;
		padding: 30px 20px;
		border-top: 3px solid #e74c3c;
	}

	.footer p {
		margin: 5px 0;
	}

	.footer-tagline {
		font-size: 0.9rem;
		color: #999;
		margin-top: 10px;
	}

	.footer a {
		color: #e74c3c;
		text-decoration: none;
		font-weight: 600;
	}

	.footer a:hover {
		color: white;
	}

	.footer-links {
		font-size: 0.9rem;
		color: #999;
		margin-top: 10px;
	}

	/* RESPONSIVE */
	@media (max-width: 768px) {
		h1 {
			font-size: 2.5rem;
		}

		.hero-subtitle {
			font-size: 1.4rem;
		}

		.hero-description {
			font-size: 1rem;
		}

		section h2 {
			font-size: 2rem;
		}

		.cta-buttons {
			flex-direction: column;
		}

		.btn {
			width: 100%;
		}

		.hero {
			min-height: 80vh;
		}

		section {
			padding: 60px 20px;
		}

		.about-nexus {
			padding: 30px 20px;
		}

		.cta-section {
			padding: 40px 20px;
		}
	}

	@media (max-width: 480px) {
		h1 {
			font-size: 2rem;
		}

		.hero-subtitle {
			font-size: 1.2rem;
		}

		section h2 {
			font-size: 1.5rem;
		}

		.features-grid {
			grid-template-columns: 1fr;
		}

		.audience-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
