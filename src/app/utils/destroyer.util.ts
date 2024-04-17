import { Subscription } from 'rxjs';

export class Destroyer {
  private sub = new Subscription();

  public addSub(subscription: Subscription): void {
    this.sub.add(subscription);
  }

  public destroySubs(): void {
    this.sub.unsubscribe();
  }
}
