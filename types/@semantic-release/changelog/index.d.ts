import {VerifyConditionsContext, PrepareContext} from 'semantic-release';
declare module '@semantic-release/changelog' {
    export async function verifyConditions(
        pluginConfig: unknown,
        context: verifyConditions,
    );
    export async function prepare(
        pluginConfig: unknown,
        context: PrepareContext,
    );
}
