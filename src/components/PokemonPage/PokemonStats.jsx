import { PhysicalStats, StatsGrid, StatItem, StatBar } from "./styles";
import { formatHeight, formatWeight } from "../../utils/pokemon";

export function PokemonPhysicalStats({ height, weight }) {
  return (
    <PhysicalStats>
      <h3>Physical Characteristics</h3>
      <StatsGrid>
        <StatItem>
          <h4>Height</h4>
          <p>{formatHeight(height)}</p>
        </StatItem>
        <StatItem>
          <h4>Weight</h4>
          <p>{formatWeight(weight)}</p>
        </StatItem>
      </StatsGrid>
    </PhysicalStats>
  );
}

export function PokemonBaseStats({ stats }) {
  return (
    <PhysicalStats>
      <h3>Base Stats</h3>
      <StatsGrid>
        {stats.map((stat) => (
          <StatItem key={stat.stat.name}>
            <h4>{stat.stat.name.replace("-", " ")}</h4>
            <p>{stat.base_stat}</p>
            <StatBar>
              <div value={stat.base_stat} />
            </StatBar>
          </StatItem>
        ))}
      </StatsGrid>
    </PhysicalStats>
  );
}
