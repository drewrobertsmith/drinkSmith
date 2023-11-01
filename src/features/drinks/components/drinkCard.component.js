import { Button, Card } from "react-native-paper";

import React from "react";

export default function DrinkCard({ name, image, subtitle, baseSpirit }) {
  return (
    <Card
      mode="contained"
      style={{
        padding: 4,
      }}
    >
      <Card.Cover source={image} />
      <Card.Title title={name} titleVariant="titleMedium" subtitle={subtitle}/>
      <Card.Actions>
        <Button>{baseSpirit}</Button>
      </Card.Actions>
    </Card>
  );
}
