export default function Home() {
  return (
    <main className="landing-page">
      <div className="landing-backdrop" aria-hidden="true" />
      <div className="landing-content">
        <p className="landing-eyebrow">OFFICIAL WEBSITE</p>
        <h1 className="landing-heading">Gianetto</h1>
        <p className="landing-message-primary">
          A new Gianetto experience is on the way.
        </p>
        <p className="landing-message-support">
          The official menu, branch information, reservations, private
          events, and upcoming events will be available here.
        </p>
        <div className="landing-divider" aria-hidden="true" />
        <p className="landing-closing">
          Preparing something warm, welcoming, and made for every table.
        </p>
      </div>
    </main>
  );
}
