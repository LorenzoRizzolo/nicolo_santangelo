<script>
	import Animate from "../components/Animate.svelte";

	let contactForm = {
		name: "",
		email: "",
		message: "",
		submitted: false,
		loading: false,
	};

	async function handleContactSubmit(e) {
		e.preventDefault();
		if (!contactForm.name || !contactForm.email || !contactForm.message) {
			alert("Per favore compila tutti i campi");
			return;
		}

		contactForm.loading = true;

		try {
			// Prepara il messaggio per WhatsApp
			const whatsappNumber = "393498383633";
			const message = `Ciao Nicolò, mi chiamo ${contactForm.name} (${contactForm.email}). \n\nMessaggio:\n${contactForm.message}`;
			const encodedMessage = encodeURIComponent(message);

			// Apre WhatsApp
			window.open(
				`https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
				"_blank",
			);

			contactForm.submitted = true;
			contactForm.name = "";
			contactForm.email = "";
			contactForm.message = "";

			setTimeout(() => {
				contactForm.submitted = false;
			}, 4000);
		} catch (error) {
			console.error("Errore:", error);
			alert("Errore nel contatto. Riprova.");
		} finally {
			contactForm.loading = false;
		}
	}

	function downloadVCard() {
		const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Nicolò Santangelo
N:Santangelo;Nicolò;;;
TEL;TYPE=CELL:+39 349 838 3633
EMAIL:nicolo@beebad.com
URL:https://nicolo-santangelo.rizzolo.cloud/
ADR;TYPE=WORK:;;Torino;TO;;ITALY
NOTE:Startup Builder & Business Development
ORG:Startup Builder & Business Development;
X-TITLE:Founder & Startup Builder
END:VCARD`;

		const blob = new Blob([vcard], { type: "text/vcard" });
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "nicolo-santangelo.vcf";
		document.body.appendChild(a);
		a.click();
		window.URL.revokeObjectURL(url);
		document.body.removeChild(a);
	}
</script>

<div class="container">
	<!-- HERO SECTION -->
	<Animate type="slideDown">
		<section class="hero">
			<div class="hero-content">
				<Animate type="scale" duration={0.8} delay={200}>
					<div class="profile-image-container">
						<!-- <div class="profile-image">
							<svg
								viewBox="0 0 200 200"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="100"
									cy="100"
									r="98"
									fill="#f0f0f0"
									stroke="#e74c3c"
									stroke-width="2"
								/>
								<circle
									cx="100"
									cy="70"
									r="35"
									fill="#e74c3c"
									opacity="0.1"
								/>
								<path
									d="M 70 140 Q 70 110 100 110 Q 130 110 130 140 L 130 160 Q 130 170 120 170 L 80 170 Q 70 170 70 160 Z"
									fill="#e74c3c"
									opacity="0.1"
								/>
								<text
									x="100"
									y="180"
									text-anchor="middle"
									font-size="12"
									fill="#999"
								>
									Aggiungi immagine qui
								</text>
							</svg>
						</div> -->
					</div>
				</Animate>

				<h1>Nicolò Santangelo</h1>
				<p class="subtitle">Startup Builder & Business Development</p>
				<p class="location">📍 Torino, Italia</p>

				<div class="cta-buttons">
					<button
						class="btn btn-primary"
						onclick={() =>
							document
								.getElementById("contact")
								.scrollIntoView({ behavior: "smooth" })}
					>
						Contattami
					</button>
					<button class="btn btn-secondary" onclick={downloadVCard}>
						Scarica VCard
					</button>
				</div>
			</div>
		</section>
	</Animate>

	<!-- ABOUT SECTION -->
	<Animate type="slideUp">
		<section class="about" id="about">
			<div class="section-container">
				<h2>Chi Sono</h2>
				<p>
					Founder con background in Management Engineering, focalizzato su sviluppo startup, strutturazione aziendale e progetti strategici.
				</p>
				<p>
					Esperienza in fundraising, business modeling, partnership, organizzazione team e operazioni startup-oriented.
				</p>
				<p>
					Attualmente sviluppo <strong><a href="#projects">Nexus Launchpad</a></strong>, una piattaforma AI-human progettata per standardizzare i dati startup e generare documentazione investment-ready per acceleratori e startup program.
				</p>

				<Animate type="slideLeft" duration={0.7} delay={200}>
					<div class="education-highlight">
						<h3>🎓 Master in Management Engineering</h3>
						<p><strong>Politecnico di Torino</strong></p>
						<p style="font-size: 0.95rem; margin-top: 10px;">Focus: Business Strategy • Economic & Financial Analysis • Entrepreneurship • Decision Making</p>
						<p style="font-size: 0.95rem;">
							<a href="https://webthesis.biblio.polito.it/37263/1/tesi.pdf" target="_blank" rel="noopener noreferrer">📄 Leggi la tesi</a>
						</p>
					</div>
				</Animate>
			</div>
		</section>
	</Animate>

	<!-- STARTUPS SECTION -->
	<Animate type="slideUp">
		<section class="startups" id="projects">
			<div class="section-container">
				<h2>I Miei Progetti</h2>

				<div class="startups-grid">
					<!-- NEXUS LAUNCHPAD -->
					<Animate type="slideUp" duration={0.7} delay={100}>
						<div class="startup-card">
							<div class="card-header">
								<div class="card-icon">🚀</div>
								<h3>Nexus Launchpad</h3>
							</div>
							<p>
								Piattaforma AI-human infrastructure che standardizza i dati startup e genera documentazione investment-ready attraverso un sistema AI rule-based affinato con interazione umana.
							</p>
							<div class="card-features">
								<span class="feature-tag">AI Infrastructure</span>
								<span class="feature-tag">Startup Ecosystem</span>
								<span class="feature-tag">Business Strategy</span>
							</div>
							<div class="card-links" style="margin-top: 15px;">
								<a href="/nexus" style="display: inline-block; margin-right: 10px;">📖 Scopri di Più</a>
								<!-- <a href="https://nexus.rizzolo.cloud" target="_blank" rel="noopener noreferrer">🚀 Demo</a> -->
							</div>
						</div>
					</Animate>

					<!-- BEEBAD ITALIA -->
					<Animate type="slideUp" duration={0.7} delay={300}>
						<div class="startup-card">
							<div class="card-header">
								<div class="card-icon">🍯</div>
								<h3>BEEBAD Italia</h3>
							</div>
							<p>
								Sviluppo operativo e strategico di BEEBAD Italia, un progetto premium energy drink costruito attorno a formulazione honey-based, brand lifestyle e posizionamento entertainment-driven.
							</p>
							<div class="card-features">
								<span class="feature-tag">Consumer Brand</span>
								<span class="feature-tag">Beverage</span>
								<span class="feature-tag">Brand Strategy</span>
							</div>
							<div class="card-activities" style="margin-top: 15px; font-size: 0.9rem; color: #666;">
								<div>✓ Fundraising</div>
								<div>✓ Strategic Partnerships</div>
								<div>✓ Business Modeling</div>
								<div>✓ Team Coordination</div>
								<div>✓ Go-to-Market Development</div>
							</div>
						</div>
					</Animate>
				</div>
			</div>
		</section>
	</Animate>

	<!-- CONTACT SECTION -->
	<Animate type="slideUp">
		<section class="contact" id="contact">
			<div class="section-container">
				<h2>Mettiamoci in Contatto</h2>
				<p class="contact-intro">
					Interessato a collaborare o semplicemente vuoi
					chiacchierare? Invia un messaggio e ti contatterò il prima
					possibile.
				</p>

				<Animate type="scale" duration={0.8}>
					<form onsubmit={handleContactSubmit} class="contact-form">
						<div class="form-group">
							<label for="name">Nome *</label>
							<input
								type="text"
								id="name"
								bind:value={contactForm.name}
								placeholder="Il tuo nome"
								required
							/>
						</div>

						<div class="form-group">
							<label for="email">Email *</label>
							<input
								type="email"
								id="email"
								bind:value={contactForm.email}
								placeholder="La tua email"
								required
							/>
						</div>

						<div class="form-group">
							<label for="message">Messaggio *</label>
							<textarea
								id="message"
								bind:value={contactForm.message}
								placeholder="Scrivi il tuo messaggio..."
								rows="5"
								required
							></textarea>
						</div>

						<button
							type="submit"
							class="btn btn-primary"
							disabled={contactForm.loading}
						>
							{#if contactForm.loading}
								<span class="loading-spinner"></span> Invio in corso...
							{:else}
								Invia su WhatsApp 📱
							{/if}
						</button>

						{#if contactForm.submitted}
							<div class="success-message">
								✓ Messaggio pronto! Verrai reindirizzato a
								WhatsApp.
							</div>
						{/if}
					</form>
				</Animate>

				<Animate type="slideLeft" duration={0.8} delay={200}>
					<div class="direct-contact">
						<h3>Altre Vie di Contatto</h3>
						<p>📧 Email: <a href="mailto:nicolo@beebad.com">nicolo@beebad.com</a></p>
						<p>📱 WhatsApp: <a href="https://wa.me/393498383633" target="_blank" rel="noopener noreferrer">+39 349 838 3633</a></p>
						<p>💼 LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Nicolò Santangelo</a></p>
						<p>📍 Torino, Italia</p>
					</div>
				</Animate>
			</div>
		</section>
	</Animate>

	<!-- FOOTER -->
	<footer class="footer">
		<p>Nicolò Santangelo</p>
		<p class="footer-tagline">Realizzato da <a href="https://rizzolo.cloud" target="_blank" rel="noopener noreferrer">RizzoloCloud</a></p>
	</footer>
</div>

<style>

	a{
		color: #e74c3c;
		text-decoration: none;
		font-weight: 600;
	}

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
	}

	.hero-content {
		text-align: center;
		max-width: 600px;
	}

	.profile-image-container {
		margin: 10px;
		margin-bottom: 40px;
		cursor: pointer;
	}

	.profile-image {
		width: 200px;
		height: 200px;
		margin: 0 auto;
		border: 3px solid #e74c3c;
		border-radius: 50%;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
		box-shadow: 0 10px 40px rgba(231, 76, 60, 0.1);
		transition: transform 0.3s ease;
	}

	.profile-image:hover {
		transform: scale(1.05);
	}

	.profile-image svg {
		width: 100%;
		height: 100%;
	}

	h1 {
		font-size: 3.5rem;
		font-weight: 700;
		color: #222;
		margin: 20px 0;
		letter-spacing: -1px;
		font-family: 'Playfair Display', serif;
	}

	.subtitle {
		font-size: 1.5rem;
		color: #e74c3c;
		font-weight: 600;
		margin: 10px 0;
	}

	.location {
		font-size: 1.1rem;
		color: #666;
		margin: 15px 0 40px 0;
	}

	.cta-buttons {
		display: flex;
		gap: 20px;
		justify-content: center;
		flex-wrap: wrap;
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

	.btn-primary:active {
		transform: translateY(0);
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

	.btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	/* SECTIONS */
	.section-container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 0px;
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

	/* ABOUT SECTION */
	.about {
		background-color: #fafafa;
	}

	.about p {
		font-size: 1.1rem;
		color: #555;
		margin-bottom: 20px;
		line-height: 1.8;
		text-align: justify;
	}

	.education-highlight {
		margin-top: 40px;
		padding: 30px;
		background-color: white;
		border-left: 4px solid #e74c3c;
		border-radius: 8px;
	}

	.education-highlight h3 {
		color: #e74c3c;
		margin-bottom: 15px;
		font-size: 1.3rem;
	}

	.education-highlight p {
		margin: 5px 0;
		font-size: 1rem;
	}

	/* STARTUPS SECTION */
	.startups {
		background-color: white;
		padding: 0px;
	}

	.startups-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 30px;
		margin-top: 40px;
		align-items: stretch;
	}

	.startup-card {
		background: white;
		border: 2px solid #f0f0f0;
		border-radius: 12px;
		padding: 30px;
		transition: all 0.4s ease;
		cursor: pointer;
		height: 100%;
		margin: 20px;
	}

	.startup-card:hover {
		border-color: #e74c3c;
		/* box-shadow: 0 15px 40px rgba(231, 76, 60, 0.15); */
		transform: translateY(-8px);
	}

	.card-header {
		display: flex;
		align-items: center;
		gap: 15px;
		margin-bottom: 20px;
	}

	.card-icon {
		font-size: 2.5rem;
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.8;
		}
	}

	.startup-card h3 {
		font-size: 1.5rem;
		color: #222;
		margin: 0;
	}

	.startup-card p {
		color: #666;
		line-height: 1.8;
		margin-bottom: 20px;
		font-size: 1rem;
	}

	.card-features {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.feature-tag {
		display: inline-block;
		padding: 6px 14px;
		background-color: #f0f0f0;
		color: #e74c3c;
		border-radius: 20px;
		font-size: 0.85rem;
		font-weight: 600;
		border: 1px solid #e74c3c;
	}

	/* CONTACT SECTION */
	.contact {
		background-color: #fafafa;
	}

	.contact-intro {
		text-align: center;
		font-size: 1.1rem;
		color: #666;
		margin-bottom: 40px;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.contact-form {
		max-width: 600px;
		margin: 0 auto 40px;
		background: white;
		padding: 30px;
		border-radius: 12px;
		border: 2px solid #f0f0f0;
	}

	.form-group {
		margin-bottom: 25px;
	}

	.form-group label {
		display: block;
		margin-bottom: 8px;
		font-weight: 600;
		color: #222;
		font-size: 1rem;
	}

	.form-group input,
	.form-group textarea {
		width: calc(100%);
		padding: 12px 15px;
		border: 2px solid #f0f0f0;
		border-radius: 8px;
		font-family: inherit;
		font-size: 1rem;
		transition: all 0.3s ease;
		background-color: #fafafa;
	}

	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: #e74c3c;
		background-color: white;
		box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
	}

	.form-group textarea {
		resize: vertical;
		min-height: 120px;
	}

	.contact-form button {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}

	.loading-spinner {
		display: inline-block;
		width: 16px;
		height: 16px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-top: 2px solid white;
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.success-message {
		margin-top: 15px;
		padding: 15px;
		background-color: #2ecc71;
		color: white;
		border-radius: 8px;
		text-align: center;
	}

	.direct-contact {
		max-width: 600px;
		margin: 40px auto;
		text-align: center;
		background: white;
		padding: 30px;
		border-radius: 12px;
		border-left: 4px solid #e74c3c;
	}

	.direct-contact h3 {
		font-size: 1.3rem;
		color: #e74c3c;
		margin-bottom: 20px;
	}

	.direct-contact p {
		color: #666;
		margin: 10px 0;
		font-size: 1rem;
	}

	.card-links {
		display: flex;
		gap: 15px;
	}

	.card-links a {
		display: inline-block;
		padding: 8px 14px;
		background-color: #f0f0f0;
		border-radius: 6px;
		transition: all 0.3s ease;
		font-size: 0.9rem;
	}

	.card-links a:hover {
		background-color: #e74c3c;
		color: white;
	}

	.card-activities div {
		margin: 5px 0;
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

	/* RESPONSIVE */
	@media (max-width: 768px) {
		h1 {
			font-size: 2.5rem;
		}

		.subtitle {
			font-size: 1.2rem;
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

		/* .profile-image {
			width: 150px;
			height: 150px;
		} */

		.startups-grid {
			grid-template-columns: 1fr;
		}

		.hero {
			min-height: 80vh;
		}

		section {
			padding: 60px 20px;
		}
	}

	@media (max-width: 480px) {
		h1 {
			font-size: 2rem;
		}

		.subtitle {
			font-size: 1.1rem;
		}

		section h2 {
			font-size: 1.5rem;
		}

		.profile-image {
			width: 160px;
			height: 160px;
		}

		.contact-form {
			padding: 20px;
		}
	}
</style>
