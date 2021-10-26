function KebabOrder(props) {
  const { kebab, deleteKebab } = props;
  return (
    <div key="1" className="order_block">
      <p>Commande : 1 </p>
      <p>Ingredient</p>
      <p>{kebab.pain}</p>
      <p>{kebab.viande}</p>
      <p>{kebab.salade}</p>
      <p>{kebab.tomate}</p>
      <p>{kebab.oignon}</p>
      <p>{kebab.sauces}</p>
      <button className="title_block" onClick={() => deleteKebab(1)}>
        Supprimer Commande
      </button>
    </div>
  );
}

export default KebabOrder;
