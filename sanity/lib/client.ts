import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skmxtErVHl6ySjWiZKaPm04qDZNaXvAPvjJD2utNMyINXWd2S4wzLu4rtSX74EF4gFTR69edd2YJbI6SVojPVk0EF04zcUbolVJ9fDL9YoURbpV8KQnYeGvexvTLReom7r6oTBEhAs3LcsfjWH4riemTIh9tYcidcjPOVRegbHQw6NurkrZn",
})
