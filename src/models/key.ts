class Key {
  id: string;
  text: string;

  constructor(keyLetter: string) {
    this.text = keyLetter;
    this.id = new Date().toISOString();
  }
}

export default Key;
