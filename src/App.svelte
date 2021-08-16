<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Home from "./pages/Home.svelte";
  import Nav from "./components/General/Nav.svelte";
</script>

<Router>
  <Nav />
  <Route path="/"><Home /></Route>
</Router>
