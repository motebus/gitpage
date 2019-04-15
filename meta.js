/**
 * Meta JS File that will be picked up by the Vue CLI
 */
module.exports = {
    /**
     * Add your own Prompt questions here!
     */
    prompts: {
        name: {
            type: 'string', // Question type
            required: true, // Is question Required
            message: 'Project name' // Question it's self
        },
        description: {
            type: 'string',
            required: false,
            message: '',
            default: 'My Awesome Project'
        }
    },

    /**
     * You can add a custom complete message
     */
    completeMessage: 'Project Complete!'
};