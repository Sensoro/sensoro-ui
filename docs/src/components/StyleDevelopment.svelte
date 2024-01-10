<script>
  import "../../../dist/themes.css"
  const base = import.meta.glob("../../../src/base/*.css", { eager: true })
  import "tailwindcss/base.css"
  const unstyled = import.meta.glob("../../../src/components/unstyled/*.css", { eager: true })
  const styled = import.meta.glob("../../../src/components/styled/*.css", { eager: true })
  import "tailwindcss/components.css"
  const utilitiesGlobal = import.meta.glob("../../../src/utilities/global/*.css", { eager: true })
  const utilitiesUnstyled = import.meta.glob("../../../src/utilities/unstyled/*.css", { eager: true })
  const utilitiesStyled = import.meta.glob("../../../src/utilities/styled/*.css", { eager: true })
  import "tailwindcss/utilities.css"
  import "../global.css"
</script>
