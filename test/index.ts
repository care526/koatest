async function asd() {
  return 1;
}

async function asdasd() {
  const a = await asd();
  console.log(a);
}

asdasd()
