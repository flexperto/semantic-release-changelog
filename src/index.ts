import {
    verifyConditions as verifyConditionsBase,
    prepare as prepareBase,
} from '@semantic-release/changelog';
import {VerifyConditionsContext, PrepareContext} from 'semantic-release';

export const verifyConditions = async (
    pluginConfig: unknown,
    context: VerifyConditionsContext,
) => {
    await verifyConditionsBase(pluginConfig, context);
};

export const prepare = async (
    pluginConfig: unknown,
    context: PrepareContext,
) => {
    const onlyOnBranches =
        pluginConfig &&
        typeof pluginConfig === 'object' &&
        'branches' in pluginConfig &&
        typeof pluginConfig.branches === 'string'
            ? pluginConfig.branches
            : undefined;

    // if the plugin is configured with a `branches` option, only run on those branches
    if (
        onlyOnBranches &&
        !new RegExp(onlyOnBranches).test(context.branch.name)
    ) {
        return;
    }

    await prepareBase(pluginConfig, context);
};
