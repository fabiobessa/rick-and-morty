<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img data-cy="topbar-image" src="/images/Rick-And-Morty-Logo.png" alt="" width="120">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a data-cy="characters" class="nav-link active" aria-current="page" href="#">Characters</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
