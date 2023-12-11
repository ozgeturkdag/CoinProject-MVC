import { SiCoinmarketcap } from "react-icons/si";
import { RiStockFill } from "react-icons/ri";
import { FaPercent } from "react-icons/fa";
import { MdPriceChange, MdEventAvailable } from "react-icons/md";

export class InfoLabel {
  constructor(coin, history) {
    this.coin = coin;

    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Volume",
        value: this.coin?.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Supply",
        value: this.coin?.supply,
      },
      {
        icon: <MdPriceChange />,
        label: "Price (USD)",
        value: this.coin?.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24-Hour Change (%)",
        value: this.coin?.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "24-Hour Volume (USD)",
        value: this.coin?.volumeUsd24Hr,
      },
    ];

    this.chartData = {
      labels: history?.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          label: "Price Value",
          data: history?.map((i) => Number(i.priceUsd).toFixed(2)),
        },
      ],
    };
  }
}
