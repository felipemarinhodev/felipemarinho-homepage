import { sum } from "@felipemarinho/utils/math/sum";
import { Text } from "@felipemarinho/design-system/components/Text";

export function HomeScreen() {
  return (
    <main>
      <Text tag="h1">Home</Text>
      <Text tag="p">
        {`Importando modulo local: @felipemarinho/utils/math/sum sum(2,2) = ${sum(
          2,
          2
        )}`}
      </Text>
      <p>
        Já demos diversas dicas envolvendo o aplicativo Calculadora (Calculator)
        do macOS aqui no MacMagazine. Na prática, elas acabam facilitando — e
        muito — a vida de quem faz muitos cálculos durante o dia. Na dica de
        hoje, mostraremos como você pode escolher quantas casas decimais serão
        exibidas nos resultados dos cálculos.
      </p>
    </main>
  );
}
