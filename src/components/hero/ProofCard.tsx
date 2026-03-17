type ProofCardProps = {
  label: string
}

const ProofCard = ({ label }: ProofCardProps) => {
  return (
    <div className="hero-proof-card">
      <span>{label}</span>
    </div>
  )
}

export default ProofCard

