import styles from "../styles/Results.module.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from "recharts";

interface ResultsProps {
  data: {
    name: string;
    votes: number;
  }[];
}

export function Results({ data }: ResultsProps) {
  const totalVotes = data.reduce((sum, item) => sum + item.votes, 0);

  const chartData = data.map((item) => ({
    ...item,
    percentage: totalVotes ? ((item.votes / totalVotes) * 100).toFixed(2) : 0,
  }));

  return (
    <div className={styles.Results}>
      <ResponsiveContainer width={600} height={450}>
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 6" />
          <XAxis
            orientation="top"
            domain={[0, 25]}
            allowDataOverflow
            type="number"
            dataKey={"percentage"}
            tickFormatter={(value) => `${value}%`}
            tickCount={8}
            minTickGap={5}
            tickSize={8}
          />
          <YAxis dataKey="name" type="category" width={150} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Bar
            dataKey="percentage"
            fill="#000"
            activeBar={<Rectangle fill="#fff" stroke="#000" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
