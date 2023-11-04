import { Button, Card } from "react-native-paper";

import React from "react";

export default function DrinkCard({ item }) {
  return (
    <Card
      mode="contained"
      style={{
        padding: 4,
      }}
    >
      <Card.Cover source={{uri: item.image}} />
      <Card.Title
        title={item.name}
        titleVariant="titleMedium"
        subtitle={item.shortDescription}
      />
      <Card.Actions>
        <Button>{item.baseSpirit}</Button>
      </Card.Actions>
    </Card>
  );
}
