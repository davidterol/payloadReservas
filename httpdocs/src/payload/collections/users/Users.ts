import type { CollectionConfig } from 'payload'
import { checkRole } from "../../access/utils/checkRoles"
import { adminOrSelf } from "../../access/adminOrSelf"
import { admins } from '@/payload/access/admins'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    plural: {
      es: "Usuarios",
    },
    singular: {
      es: "Usuario",
    },
  },
  access: {
    read: adminOrSelf,
    create: admins,
    update: adminOrSelf,
    delete: admins,
    /**
     * Only allow users with the role "admin" to access the admin panel
     */
    // admin: ({ req }) => {
    //   const { user } = req
    //   return checkRole(["admin"], user)
    // },
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: "roles",
      type: "select",
      label: "Roles",
      admin: {
        position: "sidebar",
      },
      hasMany: true,
      required: true,
      defaultValue: ["authenticated"],
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Authenticated",
          value: "authenticated",
        },
      ],
    },
    {
      name: "lastAccess",
      type: "date",
      label: "Último acceso",
      access: {
        update: () => false,
      },
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
        position: "sidebar",
      },
    },
    {
      type: "checkbox",
      name: "active",
      label: "Usuario activo",
      defaultValue: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      label: "Información personal",
      type: "collapsible",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "name",
              label: "Nombre",
              type: "text",
              required: true,
            },
            {
              name: "lastName",
              label: "Apellidos",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    }
  ]
}
