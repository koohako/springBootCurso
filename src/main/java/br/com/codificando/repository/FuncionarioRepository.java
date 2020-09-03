package br.com.codificando.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.codificando.model.Funcionario;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Long> {

	
	
}
