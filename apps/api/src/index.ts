import { defineAbilityFor, projectSchema } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: '1' })

const project = projectSchema.parse({
  id: 'project-1',
  ownerId: '1',
})

console.log(ability.can('get', 'User'))
console.log(ability.can('delete', project))
