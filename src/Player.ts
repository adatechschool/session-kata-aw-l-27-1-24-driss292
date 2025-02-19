export class Player {
  private name: string;
  private score: number;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
  }

  // GETTERS
  public getName(): string {
    return this.name;
  }

  public getScore(): number {
    return this.score;
  }

  public incrementScore(points: number): void {
    // Je vérifie si le nombre de point est positif
    if (points < 0) {
      console.log(
        "Impossible d'incrémenter le score avec un nombre de point négatif"
      );
      return;
      // un throw new Error(); est probablement plus pertinent
    }
    this.score += points;
  }
}
