const StatsSection = () => {
  const stats = [
    {
      number: "25",
      label: "Office Worldwide",
      description: "This milestone likes demanding greeting from with from Olympic runners"
    },
    {
      number: "789",
      label: "Team Members",
      description: "Teachings of the great explorer the truth choose builder of human"
    },
    {
      number: "8K",
      label: "Visa Processed",
      description: "Your targets to brings strategic level as perhaps it's advice levels an"
    },
    {
      number: "99+",
      label: "Satisfied Clients",
      description: "Our technique staff of the great explorer the truth choose builder"
    }
  ];

  return (
    <div className="py-16 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="text-4xl lg:text-5xl font-bold">{stat.number}</div>
              <div className="text-lg font-semibold">{stat.label}</div>
              <p className="text-sm text-accent-foreground/80">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;