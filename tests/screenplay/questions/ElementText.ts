import { Actor } from '../Actor';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class ElementText {
    static of(selector: string) {
        return {
            async answeredBy(actor: Actor): Promise<string> {
                const ability = actor.abilityTo(BrowseTheWeb);
                return ability.page.locator(selector).innerText();
            },
        };
    }
}