import { Actor } from '../Actor';
import { BrowseTheWeb } from '../abilities/BrowseTheWeb';

export class PageUrl {
    static current() {
        return {
            async answeredBy(actor: Actor): Promise<string> {
                const ability = actor.abilityTo(BrowseTheWeb);
                return ability.page.url();
            },
        };
    }
}