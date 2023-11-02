import { Button, Card } from "react-native-paper";

import React from "react";

export default function DrinkCard({ drink }) {
  return (
    <Card
      mode="contained"
      style={{
        padding: 4,
      }}
    >
      <Card.Cover source={drink.image} />
      <Card.Title
        title={drink.name}
        titleVariant="titleMedium"
        subtitle={drink.shortDescription}
      />
      <Card.Actions>
        <Button>{drink.baseSpirit}</Button>
      </Card.Actions>
    </Card>
  );
}
